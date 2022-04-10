package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/go-sql-driver/mysql"
)

var db *sql.DB

type Course struct {
	ID          int64
	Title       string
	Description string
	Price       float32
}

func main() {
	// Capture connection properties.
	cfg := mysql.Config{
		User:   os.Getenv("DBUSER"),
		Passwd: os.Getenv("DBPASS"),
		Net:    "tcp",
		Addr:   "127.0.0.1:3306",
		DBName: "recordings",
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

	courses, err := coursesByTeachers("Abc")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Course found: %v\n", courses)

	// Hard-code ID 2 here to test the query.
	crs, err := coursesByID(2)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Course found: %v\n", crs)

	crsID, err := addCourse(Course{
		Title:       "Software Engineering",
		Description: "Software process and development",
		Price:       1000.00,
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("ID of added course: %v\n", crsID)
}

func coursesByTeachers(name string) ([]Course, error) {
	// A courses slice to hold data from returned rows.
	var courses []Course

	rows, err := db.Query("SELECT * FROM course WHERE teacher = ?", name)
	if err != nil {
		return nil, fmt.Errorf("coursesByTeachers %q: %v", name, err)
	}
	defer rows.Close()
	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var crs Course
		if err := rows.Scan(&crs.ID, &crs.Title, &crs.Description, &crs.Price); err != nil {
			return nil, fmt.Errorf("coursesByTeachers %q: %v", name, err)
		}
		courses = append(courses, crs)
	}
	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("coursesByTeachers %q: %v", name, err)
	}
	return courses, nil
}

func courseByID(id int64) (Course, error) {
	var crs Course

	row := db.QueryRow("SELECT * FROM course WHERE id = ?", id)
	if err := row.Scan(&crs.ID, &crs.Title, &crs.Description, &crs.Price); err != nil {
		if err == sql.ErrNoRows {
			return crs, fmt.Errorf("CoursesById %d: no such course", id)
		}
		return crs, fmt.Errorf("coursesById %d: %v", id, err)
	}
	return crs, nil
}

func addCource(crs Course) (int64, error) {
	result, err := db.Exec("INSERT INTO course (title, description, price) VALUES (?, ?, ?)", alb.Title, alb.Artist, alb.Price)
	if err != nil {
		return 0, fmt.Errorf("addCourse: %v", err)
	}
	id, err := result.LastInsertId()
	if err != nil {
		return 0, fmt.Errorf("addCourse: %v", err)
	}
	return id, nil
}
