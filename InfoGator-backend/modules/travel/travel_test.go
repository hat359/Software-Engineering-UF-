package travel

import (
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

	hf := http.HandlerFunc(GetQuestions)

	hf.ServeHTTP(recorder, req)

	// Check the status code is what we expect.
	if status := recorder.Code; status != http.StatusOK {
		t.Errorf("Get Questions returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	// // Check the response body is what we expect.
	// expected := `Hello World!`
	// actual := recorder.Body.String()
	// if actual != expected {
	// 	t.Errorf("handler returned unexpected body: got %v want %v", actual, expected)
	// }

	req2, err2 := http.NewRequest("GET", "", nil)

	if err2 != nil {
		t.Fatal(err2)
	}

	recorder2 := httptest.NewRecorder()

	hf2 := http.HandlerFunc(GetAnswers)

	hf2.ServeHTTP(recorder2, req2)

	// Check the status code is what we expect.
	if status := recorder2.Code; status != http.StatusOK {
		t.Errorf("Get Answers returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	req3, err3 := http.NewRequest("GET", "", nil)

	if err3 != nil {
		t.Fatal(err3)
	}

	recorder3 := httptest.NewRecorder()

	hf3 := http.HandlerFunc(GetOneQuestion)

	hf3.ServeHTTP(recorder3, req3)

	// Check the status code is what we expect.
	if status := recorder3.Code; status != http.StatusOK {
		t.Errorf("Get One Question returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}
}
