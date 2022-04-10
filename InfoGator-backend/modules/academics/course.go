package academics

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type course struct {
	CourseID         string `json:"ID"`
	CourseName       string `json:"Name"`
	CourseDepartment string `json:"Department"`
}

type allCourses []course

var courses = allCourses{
	{
		CourseID:         "cat1",
		CourseName:       "Finance",
		CourseDepartment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		CourseID:         "cat2",
		CourseName:       "Academics",
		CourseDepartment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
}

func extractCoursesFromDatabase() ([]course, error) {

	connectDB()

	rows, err := db.Query("SELECT * FROM academic_course")
	if err != nil {
		return nil, fmt.Errorf("extracting courses: %v", err)
	}
	defer rows.Close()

	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var crs course
		if err := rows.Scan(&crs.CourseID, &crs.CourseName, &crs.CourseDepartment); err != nil {
			return nil,
				fmt.Errorf("extracting answers : %v", err)
		}
		courses = append(courses, crs)
	}

	if err := rows.Err(); err != nil {
		return nil,
			fmt.Errorf("extracting answers : %v", err)
	}
	db.Close()
	return courses, nil

}

// For fetching answers
func GetCourses(w http.ResponseWriter, r *http.Request) {
	courses = allCourses{}

	var newCourse course
	courses, err := extractCoursesFromDatabase()
	if err != nil {
		log.Fatal(err)
	}
	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Kindly provide the data with the course details")
	}

	json.Unmarshal(reqBody, &newCourse)
	courses = append(courses, newCourse)
	w.WriteHeader(http.StatusCreated)

	json.NewEncoder(w).Encode(courses)
}
