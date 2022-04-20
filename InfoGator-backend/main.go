package main

import (
	"InfoGator/modules/academics"
	"InfoGator/modules/category"
	"InfoGator/modules/finance"
	"InfoGator/modules/travel"
	"InfoGator/modules/users"
	"database/sql"

	"fmt"
	"log"
	"net/http"

	"github.com/go-sql-driver/mysql"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

var db *sql.DB

func Cors(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=ascii")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type,access-control-allow-origin, access-control-allow-headers")
	w.Write([]byte("Hello, World!"))
}

func newRouter() *mux.Router {

	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/plm/cors", Cors)
	router.HandleFunc("/", homeLink)

	router.HandleFunc("/info-gator-api/category", category.CreateCategory).Methods("GET")
	router.HandleFunc("/info-gator-api/category/{id}", category.GetOneCategory).Methods("GET")
	router.HandleFunc("/info-gator-api/category/all", category.GetCategory).Methods("GET")

	router.HandleFunc("/info-gator-api/travel/faq", travel.GetQuestions).Methods("GET")
	router.HandleFunc("/info-gator-api/travel/faq/question", travel.AddQuestion).Methods("POST")
	router.HandleFunc("/info-gator-api/travel/faq/{id}", travel.GetOneQuestion).Methods("GET")
	router.HandleFunc("/info-gator-api/travel/faq/answers/{questionId}", travel.GetAnswers).Methods("GET")
	router.HandleFunc("/info-gator-api/travel/faq/answer", travel.AddAnswer).Methods("POST")

	router.HandleFunc("/info-gator-api/finance/appointment", finance.GetAppointments).Methods("GET")
	router.HandleFunc("/info-gator-api/finance/appointment/app", finance.AddAppointment).Methods("POST")
	router.HandleFunc("/info-gator-api/finance/appointment/{id}", finance.GetOneAppointment).Methods("GET")

	router.HandleFunc("/info-gator-api/academics/courses", academics.GetCourses).Methods("GET")
	router.HandleFunc("/info-gator-api/academics/courses/chats/{courseId}", academics.GetChats).Methods("GET")
	router.HandleFunc("/info-gator-api/academics/courses/chats", academics.AddChat).Methods("POST")

	router.HandleFunc("/info-gator-api/users", users.GetUsers).Methods("GET")
	router.HandleFunc("/info-gator-api/users/add", users.AddUser).Methods("POST")

	return router
}

func main() {

	// ..... Database Connection Check

	// Capture connection properties.
	cfg := mysql.Config{
		// User:   "bc8bfc8b34ccc4",
		// Passwd: "6b67f937",
		// Net:    "tcp",
		// Addr:   "us-cdbr-east-03.cleardb.com",
		// DBName: "heroku_daabc0ba752f575",
		User:   "root",
		Passwd: "root",
		Net:    "tcp",
		Addr:   "127.0.0.1:3306",
		DBName: "InfoGator",
		AllowNativePasswords: true,
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
	fmt.Println("Connected!")

	// .....

	router := newRouter()

	// log.Fatal(http.ListenAndServe(":8080", router))
	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}),
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"}), handlers.AllowedOrigins([]string{"*"}))(router)))
}

func homeLink(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome home!")
}
