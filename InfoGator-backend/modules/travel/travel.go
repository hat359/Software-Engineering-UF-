package travel

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/gorilla/mux"
)

func Travelinfo(c *fiber.Ctx) error {
	return c.SendString("Success!")
}

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

func CreateQuestion(w http.ResponseWriter, r *http.Request) {
	var newQuestion question
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
