package users_test

import (
	"InfoGator/modules/users"
	"net/http"
	"net/http/httptest"
	"testing"

	_ "github.com/gorilla/mux"
)

func TestHandler(t *testing.T) {

	req, err := http.NewRequest("GET", "", nil)

	if err != nil {
		t.Fatal(err)
	}

	recorder := httptest.NewRecorder()

	hf := http.HandlerFunc(users.GetUsers)

	hf.ServeHTTP(recorder, req)

	// Check the status code is what we expect.
	if status := recorder.Code; status != http.StatusOK {
		t.Errorf("Get Users returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}
}

func TestGetUsers(t *testing.T) {
	type args struct {
		w http.ResponseWriter
		r *http.Request
	}
	tests := []struct {
		name string
		args args
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			GetUsers(tt.args.w, tt.args.r)
		})
	}
}
