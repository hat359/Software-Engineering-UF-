package travel

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"

	"log"
	"net/http"

	"github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

var db *sql.DB

type question struct {
	ID             string `json:"ID"`
	Question       string `json:"Question"`
	PostedByUserId string `json:"PostedByUserId"`
}

type allQuestions []question

var questions = allQuestions{
	{
		ID:             "q1",
		Question:       "What documents to carry during travel?",
		PostedByUserId: "abc123",
	},
	{
		ID:             "q2",
		Question:       "How much baggage is allowed in qatar airways?",
		PostedByUserId: "abc456",
	},
	{
		ID:             "q5",
		Question:       "What documents to carry during travel?",
		PostedByUserId: "abc789",
	},
}

func extractQuestionsFromDatabase() ([]question, error) {

	// ,,,,,,,,
	cfg := mysql.Config{
		// User:   "root",
		// Passwd: "macnuj21",
		// Net:    "tcp",
		// Addr:   "127.0.0.1:3306",
		// DBName: "InfoGator",
		User:   "bc8bfc8b34ccc4",
		Passwd: "6b67f937",
		Net:    "tcp",
		Addr:   "us-cdbr-east-03.cleardb.com",
		DBName: "heroku_daabc0ba752f575",
		AllowNativePasswords:true,
	}
	// Get a database handle.
	var err error
	db, err = sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}

	pingErr := db.Ping()
	if pingErr != nil {
		log.Fatal(pingErr)
	}

	// ,,,,,,,,,,

	rows, err := db.Query("SELECT * FROM travel_faq")
	if err != nil {
		return nil, fmt.Errorf("extracting questions: %v", err)
	}
	defer rows.Close()

	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var qt question
		if err := rows.Scan(&qt.ID, &qt.Question, &qt.PostedByUserId); err != nil {
			return nil,
				fmt.Errorf("extracting question : %v", err)
		}
		questions = append(questions, qt)
	}
	if err := rows.Err(); err != nil {
		return nil,
			fmt.Errorf("extracting questions : %v", err)
	}

	return questions, nil
}

func CreateQuestion(w http.ResponseWriter, r *http.Request) {
	var newQuestion question
	questions, err := extractQuestionsFromDatabase()
	if err != nil {
		log.Fatal(err)
	}
	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Kindly enter data with the event title and description only in order to update")
	}

	json.Unmarshal(reqBody, &newQuestion)
	questions = append(questions, newQuestion)
	w.WriteHeader(http.StatusCreated)

	json.NewEncoder(w).Encode(questions)
}

func GetOneQuestion(w http.ResponseWriter, r *http.Request) {
	questionID := mux.Vars(r)["id"]

	for _, singleEvent := range questions {
		if singleEvent.ID == questionID {
			json.NewEncoder(w).Encode(singleEvent)
		}
	}
}
