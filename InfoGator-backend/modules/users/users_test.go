package users_test

import (
	"InfoGator/modules/users"

	"net/http"
	"net/http/httptest"
	"testing"
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

	// // Check the response body is what we expect.
	// expected := `Hello World!`
	// actual := recorder.Body.String()
	// if actual != expected {
	// 	t.Errorf("handler returned unexpected body: got %v want %v", actual, expected)
	// }
}
