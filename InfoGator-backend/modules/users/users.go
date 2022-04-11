package users

import (
	"encoding/json"
	"fmt"
	"io/ioutil"

	"log"
	"net/http"

	_ "github.com/gorilla/mux"
)

type user struct {
	UserID   string `json:"UserID"`
	Username string `json:"Username"`
	Password string `json:"Password"`
}

type allUsers []user

var users = allUsers{
	{
		UserID:   "user1",
		Username: "anuj.t21",
		Password: "pass123",
	},
	{
		UserID:   "user5",
		Username: "hat.art1",
		Password: "pass456",
	},
}

func extractUsersFromDatabase() ([]user, error) {

	connectDB()

	rows, err := db.Query("SELECT * FROM users")
	if err != nil {
		return nil, fmt.Errorf("extracting users: %v", err)
	}
	defer rows.Close()

	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var usr user
		if err := rows.Scan(&usr.UserID, &usr.Username, &usr.Password); err != nil {
			return nil,
				fmt.Errorf("extracting users : %v", err)
		}
		users = append(users, usr)
	}

	if err := rows.Err(); err != nil {
		return nil,
			fmt.Errorf("extracting users : %v", err)
	}
	db.Close()
	return users, nil

}

// addUser adds the specified user to the database,
// returning the user ID of the new entry
func addUserToDatabase(usr user) (int64, error) {
	connectDB()
	result, err := db.Exec("INSERT INTO user VALUES (?, ?, ?)", usr.UserID, usr.Username, usr.Password)
	if err != nil {
		return 0, fmt.Errorf("addUser: %v", err)
	}
	id, err := result.LastInsertId()
	if err != nil {
		return 0, fmt.Errorf("addUser: %v", err)
	}
	db.Close()
	return id, nil
}

func GetUsers(w http.ResponseWriter, r *http.Request) {
	users = allUsers{}

	var newUser user
	users, err := extractUsersFromDatabase()
	if err != nil {
		log.Fatal(err)
	}
	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Kindly enter data with the user details only")
	}

	json.Unmarshal(reqBody, &newUser)
	users = append(users, newUser)
	w.WriteHeader(http.StatusCreated)

	json.NewEncoder(w).Encode(users)
}

func AddUser(w http.ResponseWriter, r *http.Request) {
	requestBody, _ := ioutil.ReadAll(r.Body)
	var usr user
	json.Unmarshal(requestBody, &usr)
	fmt.Printf(usr.UserID)
	addUserToDatabase(usr)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(usr)
}
