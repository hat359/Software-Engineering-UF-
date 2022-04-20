package academics

import (
	"database/sql"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/DATA-DOG/go-sqlmock"
)

func TestGetChats(t *testing.T) {
	t.Parallel()

	db, mock := NewMock()

	type fields struct {
		DB *sql.DB
	}

	r, err := http.NewRequest("GET", "/info-gator-api/academics/courses/chats/Check1", nil)
	w := httptest.NewRecorder()

	if err == nil {
		fmt.Println("Pass")
		// t.Fatal(err)
		defer r.Body.Close()
	} else {
		fmt.Println(err)
	}

	query := "SELECT * FROM course_chat WHERE CourseID = Check"

	rows := sqlmock.NewRows([]string{"CourseID", "UserID", "ChatID", "Message"})
	rows.AddRow("Check1", "Check", "Check", "Check Message")

	mock.ExpectQuery(query).WillReturnRows(rows)
	type args struct {
		w http.ResponseWriter
		r *http.Request
	}
	tests := []struct {
		name   string
		fields fields
		args   args
	}{
		// TODO: Add test cases.
		{"requestGetChats", fields{DB: db}, args{w, r}},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			GetChats(tt.args.w, tt.args.r)
		})
	}
}

func TestAddChat(t *testing.T) {

	r, err := http.NewRequest("POST", "/info-gator-api/academics/courses/chats", nil)
	w := httptest.NewRecorder()

	if err == nil {
		fmt.Println("Pass")
		// t.Fatal(err)
		defer r.Body.Close()
	} else {
		fmt.Println(err)
	}

	type args struct {
		w http.ResponseWriter
		r *http.Request
	}
	tests := []struct {
		name string
		args args
	}{
		// TODO: Add test cases.
		{"requestGetChats", args{w, r}},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			AddChat(tt.args.w, tt.args.r)
		})
	}
}
