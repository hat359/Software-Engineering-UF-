package category

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gorilla/mux"
)

type category struct {
	ID          string `json:"ID"`
	Title       string `json:"Title"`
	Description string `json:"Description"`
}

type allCategories []category

var categories = allCategories{
	{
		ID:          "cat1",
		Title:       "Finance",
		Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		ID:          "cat2",
		Title:       "Academics",
		Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		ID:          "cat9",
		Title:       "Travel",
		Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
}

func CreateCategory(w http.ResponseWriter, r *http.Request) {
	var newCatgeory category
	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Kindly enter data with the event title and description only in order to update")
	}

	json.Unmarshal(reqBody, &newCatgeory)
	categories = append(categories, newCatgeory)
	w.WriteHeader(http.StatusCreated)

	json.NewEncoder(w).Encode(categories)
}

func GetOneCategory(w http.ResponseWriter, r *http.Request) {
	categoryID := mux.Vars(r)["id"]

	for _, singleEvent := range categories {
		if singleEvent.ID == categoryID {
			json.NewEncoder(w).Encode(singleEvent)
		}
	}
}
