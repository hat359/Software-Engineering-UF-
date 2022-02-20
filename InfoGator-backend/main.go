package main

import (
	"InfoGator/modules/category"
	"InfoGator/modules/travel"

	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", homeLink)
	router.HandleFunc("/category", category.CreateCategory).Methods("POST")
	router.HandleFunc("/category/{id}", category.GetOneCategory).Methods("GET")
	router.HandleFunc("/travel/faq", travel.CreateQuestion).Methods("POST")
	router.HandleFunc("/travel/faq/{id}", travel.GetOneQuestion).Methods("GET")
	log.Fatal(http.ListenAndServe(":8080", router))
}

func homeLink(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome home!")
}
