package category

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
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
	categories = allCategories{}
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

func extractCategoriesFromDatabase() ([]category, error) {

	connectDB()

	rows, err := db.Query("SELECT * FROM finance_appointment")
	if err != nil {
		return nil, fmt.Errorf("extracting appointments: %v", err)
	}
	defer rows.Close()

	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var ct category
		if err := rows.Scan(&ct.ID, &ct.Title, &ct.Description); err != nil {
			return nil,
				fmt.Errorf("extracting appointments : %v", err)
		}
		categories = append(categories, ct)
	}

	if err := rows.Err(); err != nil {
		return nil,
			fmt.Errorf("extracting appointments : %v", err)
	}
	db.Close()
	return categories, nil

}

func GetCategory(w http.ResponseWriter, r *http.Request) {
	// appointments = allAppointment{}

	var newCategory category
	categories, err := extractCategoriesFromDatabase()
	if err != nil {
		log.Fatal(err)
	}
	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Kindly enter data with the event title and description only in order to update")
	}

	json.Unmarshal(reqBody, &newCategory)
	categories = append(categories, newCategory)
	w.WriteHeader(http.StatusCreated)

	json.NewEncoder(w).Encode(categories)
}
