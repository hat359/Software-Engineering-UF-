package academics

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/DATA-DOG/go-sqlmock"
)

func NewMock() (*sql.DB, sqlmock.Sqlmock) {
	db, mock, err := sqlmock.New()
	if err != nil {
		log.Fatalf("an error '%s' was not expected when opening a stub database connection", err)
	}

	return db, mock
}

func TestGetCourses(t *testing.T) {

	t.Parallel()

	db, mock := NewMock()

	type fields struct {
		DB *sql.DB
	}

	// router := getRouter(true)
	// w := httptest.NewRecorder()
	// c, _ := gin.CreateTestContext(w)
	r, err := http.NewRequest("GET", "/info-gator-api/academics/courses", nil)
	w := httptest.NewRecorder()

	if err == nil {
		fmt.Println("Pass")
		// t.Fatal(err)
		// defer r.Body.Close()
	} else {
		fmt.Println(err)
	}

	query := "SELECT * FROM academic_course"

	rows := sqlmock.NewRows([]string{"CourseID", "CourseName", "CourseDepartment"})
	rows.AddRow("Check1", "Check", "Check")

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
		{"requestGetCourses", fields{DB: db}, args{w, r}},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			GetCourses(tt.args.w, tt.args.r)
		})
	}
}
