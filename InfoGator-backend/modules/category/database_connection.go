package category

import (
	"database/sql"

	"log"

	"github.com/go-sql-driver/mysql"
)

var db *sql.DB

func connectDB() {
	// ........ Making Database Connection
	cfg := mysql.Config{
		User:   "root",
		Passwd: "root",
		Net:    "tcp",
		Addr:   "127.0.0.1:3306",
		DBName: "InfoGator",
		// User:                 "bc8bfc8b34ccc4",
		// Passwd:               "6b67f937",
		// Net:                  "tcp",
		// Addr:                 "us-cdbr-east-03.cleardb.com",
		// DBName:               "heroku_daabc0ba752f575",
		AllowNativePasswords: true,
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

	// ........
}
