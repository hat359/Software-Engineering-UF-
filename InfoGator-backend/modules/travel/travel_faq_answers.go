package travel

import (
	"encoding/json"
	"fmt"
	"io/ioutil"

	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type answer struct {
	AnswerID       string `json:"AnswerID"`
	QuestionID     string `json:"QuestionID"`
	Answer         string `json:"Answer"`
	AnswerByUserId string `json:"AnswerByUserId"`
}

type allAnswers []answer

var answers = allAnswers{}

//Fetching answers from database
func extractAnswersFromDatabase(id string) ([]answer, error) {

	connectDB()

	rows, err := db.Query("SELECT * FROM travel_faq_answers WHERE QuestionID = ?", id)
	if err != nil {
		return nil, fmt.Errorf("extracting answers: %v", err)
	}
	defer rows.Close()

	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var ans answer
		if err := rows.Scan(&ans.AnswerID, &ans.QuestionID, &ans.Answer, &ans.AnswerByUserId); err != nil {
			return nil,
				fmt.Errorf("extracting answers : %v", err)
		}
		answers = append(answers, ans)
	}

	if err := rows.Err(); err != nil {
		return nil,
			fmt.Errorf("extracting answers : %v", err)
	}
	db.Close()
	return answers, nil

}

// For fetching answers
func GetAnswers(w http.ResponseWriter, r *http.Request) {
	questionId := mux.Vars(r)["questionId"]

	answers = allAnswers{}

	var newAnswer answer
	answers, err := extractAnswersFromDatabase(questionId)
	if err != nil {
		log.Fatal(err)
	}
	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Kindly enter data with the event title and description only in order to update")
	}

	json.Unmarshal(reqBody, &newAnswer)
	answers = append(answers, newAnswer)
	w.WriteHeader(http.StatusCreated)

	json.NewEncoder(w).Encode(answers)

}
