package index

import ( // "encoding/json"

	// "github.com/gorilla/mux"

	"hello/controllers"
	"hello/travel"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {

	app.Get("/", controllers.Getbook)
	app.Get("/api/travel/", travel.Travelinfo)
}

func main() {
	// router := mux.NewRouter().StrictSlash(true)
	app := fiber.New()

	Setup(app)
	// routes.Setup(app)
	// router.HandleFunc("/", homeLink)
	// router.HandleFunc("/category", createCategory).Methods("POST")
	// router.HandleFunc("/category/{id}", getOneCategory).Methods("GET")
	// router.HandleFunc("/travel/faq", createQuestion).Methods("POST")
	// router.HandleFunc("/travel/faq/{id}", getOneQuestion).Methods("GET")
	// log.Fatal(http.ListenAndServe(":8080", router))

	app.Listen(":8000")
}

// func homeLink(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprintf(w, "Welcome home!")
// }

// type question struct {
// 	ID             string `json:"ID"`
// 	Question       string `json:"Question"`
// 	PostedByUserId string `json:"PostedByUserId"`
// }

// type allQuestions []question

// var questions = allQuestions{
// 	{
// 		ID:             "q1",
// 		Question:       "What documents to carry during travel?",
// 		PostedByUserId: "abc123",
// 	},
// 	{
// 		ID:             "q2",
// 		Question:       "How much baggage is allowed in qatar airways?",
// 		PostedByUserId: "abc456",
// 	},
// 	{
// 		ID:             "q3",
// 		Question:       "What documents to carry during travel?",
// 		PostedByUserId: "abc789",
// 	},
// }

// func createQuestion(w http.ResponseWriter, r *http.Request) {
// 	var newQuestion question
// 	reqBody, err := ioutil.ReadAll(r.Body)
// 	if err != nil {
// 		fmt.Fprintf(w, "Kindly enter data with the event title and description only in order to update")
// 	}

// 	json.Unmarshal(reqBody, &newQuestion)
// 	questions = append(questions, newQuestion)
// 	w.WriteHeader(http.StatusCreated)

// 	json.NewEncoder(w).Encode(questions)
// }

// func getOneQuestion(w http.ResponseWriter, r *http.Request) {
// 	questionID := mux.Vars(r)["id"]

// 	for _, singleEvent := range questions {
// 		if singleEvent.ID == questionID {
// 			json.NewEncoder(w).Encode(singleEvent)
// 		}
// 	}
// }

// type category struct {
// 	ID          string `json:"ID"`
// 	Title       string `json:"Title"`
// 	Description string `json:"Description"`
// }

// type allCategories []category

// var categories = allCategories{
// 	{
// 		ID:          "cat1",
// 		Title:       "Finance",
// 		Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// 	},
// 	{
// 		ID:          "cat2",
// 		Title:       "Academics",
// 		Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// 	},
// 	{
// 		ID:          "cat3",
// 		Title:       "Travel",
// 		Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// 	},
// }

// func createCategory(w http.ResponseWriter, r *http.Request) {
// 	var newCatgeory category
// 	reqBody, err := ioutil.ReadAll(r.Body)
// 	if err != nil {
// 		fmt.Fprintf(w, "Kindly enter data with the event title and description only in order to update")
// 	}

// 	json.Unmarshal(reqBody, &newCatgeory)
// 	categories = append(categories, newCatgeory)
// 	w.WriteHeader(http.StatusCreated)

// 	json.NewEncoder(w).Encode(categories)
// }

// func getOneCategory(w http.ResponseWriter, r *http.Request) {
// 	categoryID := mux.Vars(r)["id"]

// 	for _, singleEvent := range categories {
// 		if singleEvent.ID == categoryID {
// 			json.NewEncoder(w).Encode(singleEvent)
// 		}
// 	}
// }
