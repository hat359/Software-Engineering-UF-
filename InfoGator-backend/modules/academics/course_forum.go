package academics

import (
	"encoding/json"
	"fmt"
	"io/ioutil"

	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type chat struct {
	CourseID string `json:"CourseID"`
	UserID   string `json:"UserID"`
	ChatID   string `json:"ChatID"`
	Message  string `json:"Message"`
}

type allChats []chat

var chats = allChats{}

//Fetching chats from database
func extractChatsFromDatabase(id string) ([]chat, error) {

	connectDB()

	rows, err := db.Query("SELECT * FROM course_chat WHERE CourseID = ?", id)
	if err != nil {
		return nil, fmt.Errorf("extracting chat: %v", err)
	}
	defer rows.Close()

	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var ch chat
		if err := rows.Scan(&ch.CourseID, &ch.UserID, &ch.ChatID, &ch.Message); err != nil {
			return nil,
				fmt.Errorf("extracting chat : %v", err)
		}
		chats = append(chats, ch)
	}

	if err := rows.Err(); err != nil {
		return nil,
			fmt.Errorf("extracting answers : %v", err)
	}
	db.Close()
	return chats, nil

}

// For fetching chats
func GetChats(w http.ResponseWriter, r *http.Request) {
	courseId := mux.Vars(r)["courseId"]

	chats = allChats{}

	var newChat chat
	chats, err := extractChatsFromDatabase(courseId)
	if err != nil {
		log.Fatal(err)
	}
	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Kindly enter course chat data")
	}

	json.Unmarshal(reqBody, &newChat)
	chats = append(chats, newChat)
	w.WriteHeader(http.StatusCreated)

	json.NewEncoder(w).Encode(chats)

}

// addChats adds the specified question to the database,
// returning the chat ID of the new entry
func addChatToDatabase(ch chat) (int64, error) {
	connectDB()
	result, err := db.Exec("INSERT INTO course_chat VALUES (?, ?, ?, ?)", ch.CourseID, ch.UserID, ch.ChatID, ch.Message)
	if err != nil {
		return 0, fmt.Errorf("addChat: %v", err)
	}
	id, err := result.LastInsertId()
	if err != nil {
		return 0, fmt.Errorf("addChat: %v", err)
	}
	db.Close()
	return id, nil
}

func AddChat(w http.ResponseWriter, r *http.Request) {
	requestBody, _ := ioutil.ReadAll(r.Body)
	var ch chat
	json.Unmarshal(requestBody, &ch)
	fmt.Printf(ch.Message)
	addChatToDatabase(ch)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(ch)
}
