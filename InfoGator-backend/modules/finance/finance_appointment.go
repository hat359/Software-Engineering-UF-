package finance

import (
	"encoding/json"
	"fmt"
	"io/ioutil"

	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type appointment struct {
	ID             string `json:"ID"`
	FirstName      string `json:"FirstName"`
	LastName       string `json:"LastName"`
	Email          string `json:"Email"`
	Address        string `json:"Address"`
	PassportNumber string `json:"PassportNumber"`
	UFID           string `json:"UFID"`
	ZipCode        string `json:"ZipCode"`
	Contact        string `json:"Contact"`
	Status         string `json:"Status"`
}

type allAppointment []appointment

var appointments = allAppointment{
	{
		ID:             "a1",
		FirstName:      "Anuj",
		LastName:       "Tayal",
		Email:          "anujj.t21@gmail.com",
		Address:        "Gainesville",
		PassportNumber: "XXXXXXXXXX",
		UFID:           "ABCDEFG",
		ZipCode:        "32601",
		Contact:        "1234567890",
		Status:         "Scheduled",
	},
	{
		ID:             "q2",
		FirstName:      "Harsh",
		LastName:       "Athavale",
		Email:          "harsh.a21@gmail.com",
		Address:        "Gainesville",
		PassportNumber: "XXXXXXXXXX",
		UFID:           "HIJKLMN",
		ZipCode:        "32601",
		Contact:        "1234567890",
		Status:         "Scheduled",
	},
}

func extractAppointmentsFromDatabase() ([]appointment, error) {

	connectDB()

	rows, err := db.Query("SELECT * FROM finance_appointment")
	if err != nil {
		return nil, fmt.Errorf("extracting appointments: %v", err)
	}
	defer rows.Close()

	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var ap appointment
		if err := rows.Scan(&ap.ID, &ap.FirstName, &ap.LastName, &ap.Email, &ap.Address, &ap.PassportNumber, &ap.UFID, &ap.ZipCode, &ap.Contact, &ap.Status); err != nil {
			return nil,
				fmt.Errorf("extracting appointments : %v", err)
		}
		appointments = append(appointments, ap)
	}

	if err := rows.Err(); err != nil {
		return nil,
			fmt.Errorf("extracting appointments : %v", err)
	}
	db.Close()
	return appointments, nil

}

func extractOneAppointmentFromDatabase(id string) ([]appointment, error) {

	connectDB()

	rows, err := db.Query("SELECT * FROM finance_appointment WHERE ID = ?", id)
	if err != nil {
		return nil, fmt.Errorf("extracting appointments: %v", err)
	}
	defer rows.Close()

	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var ap appointment
		if err := rows.Scan(&ap.ID, &ap.FirstName, &ap.LastName, &ap.Email, &ap.Address, &ap.PassportNumber, &ap.UFID, &ap.ZipCode, &ap.Contact, &ap.Status); err != nil {
			return nil,
				fmt.Errorf("extracting appointments : %v", err)
		}
		appointments = append(appointments, ap)
	}

	if err := rows.Err(); err != nil {
		return nil,
			fmt.Errorf("extracting appointments : %v", err)
	}
	db.Close()
	return appointments, nil

}

// addAppointment adds the specified appointment to the database,
// returning the appointment ID of the new entry
func addAppointmentToDatabase(ap appointment) (int64, error) {
	connectDB()
	result, err := db.Exec("INSERT INTO finance_appointment VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", ap.ID, ap.FirstName, ap.LastName, ap.Email, ap.Address, ap.PassportNumber, ap.UFID, ap.ZipCode, ap.Contact, ap.Status)
	if err != nil {
		return 0, fmt.Errorf("addAppointment: %v", err)
	}
	id, err := result.LastInsertId()
	if err != nil {
		return 0, fmt.Errorf("addAppointment: %v", err)
	}
	db.Close()
	return id, nil
}

func GetAppointments(w http.ResponseWriter, r *http.Request) {
	appointments = allAppointment{}

	var newAppointment appointment
	appointments, err := extractAppointmentsFromDatabase()
	if err != nil {
		log.Fatal(err)
	}
	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Kindly enter data with the event title and description only in order to update")
	}

	json.Unmarshal(reqBody, &newAppointment)
	appointments = append(appointments, newAppointment)
	w.WriteHeader(http.StatusCreated)

	json.NewEncoder(w).Encode(appointments)
}

func AddAppointment(w http.ResponseWriter, r *http.Request) {
	requestBody, _ := ioutil.ReadAll(r.Body)
	var app appointment
	json.Unmarshal(requestBody, &app)
	fmt.Printf(app.FirstName)
	addAppointmentToDatabase(app)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(app)
}

// func GetOneAppointment(w http.ResponseWriter, r *http.Request) {
// 	appointmentID := mux.Vars(r)["id"]

// 	for _, singleEvent := range appointments {
// 		if singleEvent.ID == appointmentID {
// 			json.NewEncoder(w).Encode(singleEvent)
// 		}
// 	}
// }

func GetOneAppointment(w http.ResponseWriter, r *http.Request) {
	appointmentId := mux.Vars(r)["id"]

	appointments = allAppointment{}

	var newAppointment appointment
	appointments, err := extractOneAppointmentFromDatabase(appointmentId)
	if err != nil {
		log.Fatal(err)
	}
	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Kindly enter appointment data only")
	}

	json.Unmarshal(reqBody, &newAppointment)
	appointments = append(appointments, newAppointment)
	w.WriteHeader(http.StatusCreated)

	json.NewEncoder(w).Encode(appointments)

}
