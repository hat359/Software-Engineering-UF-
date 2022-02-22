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
	"github.com/gorilla/handlers"

)

var db *sql.DB

func Cors(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=ascii")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers","Content-Type,access-control-allow-origin, access-control-allow-headers")
			w.Write([]byte("Hello, World!"))
	}

func main() {

	// Capture connection properties.
	cfg := mysql.Config{
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
	fmt.Println("Connected!")
	
  
  
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/plm/cors",Cors)
	router.HandleFunc("/", homeLink)
	router.HandleFunc("/category", category.CreateCategory).Methods("POST")
	router.HandleFunc("/category/{id}", category.GetOneCategory).Methods("GET")
	router.HandleFunc("/travel/faq", travel.CreateQuestion).Methods("POST")
	router.HandleFunc("/travel/faq/{id}", travel.GetOneQuestion).Methods("GET")


	// log.Fatal(http.ListenAndServe(":8080", router))
	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}), handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"}), handlers.AllowedOrigins([]string{"*"}))(router)))
}

func homeLink(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome home!")
}

  



