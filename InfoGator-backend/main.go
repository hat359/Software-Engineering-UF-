package main

import (
	"InfoGator/modules/category"
	"InfoGator/modules/travel"
	"database/sql"

	"fmt"
	"log"
	"net/http"

	"github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

var db *sql.DB

func main() {

	// ..... Database Connection

	// Capture connection properties.
	cfg := mysql.Config{
		User:   "root",
		Passwd: "macnuj21",
		Net:    "tcp",
		Addr:   "127.0.0.1:3306",
		DBName: "InfoGator",
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

	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", homeLink)
	router.HandleFunc("/category", category.CreateCategory).Methods("GET")
	router.HandleFunc("/category/{id}", category.GetOneCategory).Methods("GET")
	router.HandleFunc("/travel/faq", travel.GetQuestions).Methods("GET")
	router.HandleFunc("/travel/faq/question", travel.AddQuestion).Methods("POST")
	router.HandleFunc("/travel/faq/{id}", travel.GetOneQuestion).Methods("GET")
	log.Fatal(http.ListenAndServe(":8080", router))
}

func homeLink(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome home!")
}
