package main

import (
	"errors"
	"fmt"
	"os"

	"github.com/dixonwille/wmenu/v5"
)

type menuItem int

const (
	subject menuItem = iota
	teacher
	resource
)

var menuItemStrings = map[menuItem]string{
	subject:  "Subjects",
	teacher:  "Teachers",
	resource: "Resources",
}

func main() {
	mm := mainMenu()
	err := mm.Run()
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

func mainMenu() *wmenu.Menu {
	menu := wmenu.NewMenu("Choose action")
	menu.Option(menuItemStrings[subject], subject, true, nil)
	menu.Option(menuItemStrings[teacher], teacher, false, nil)
	menu.Option(menuItemStrings[resource], resource, false, func(opt wmenu.Opt) error {
		fmt.Printf("Help services!\n")
		return nil
	})
	menu.Action(func(opts []wmenu.Opt) error {
		if len(opts) != 1 {
			return errors.New("wrong number of options chosen")
		}

		tm := subMenu(opts[0].Value.(menuItem))
		return tm.Run()
	})
	return menu
}

func subMenu(selection menuItem) *wmenu.Menu {
	menu := wmenu.NewMenu(fmt.Sprintf("Further choice for %s?", menuItemStrings[selection]))
	if selection == subject {
		menu.Option("Bachelors", nil, true, nil)
		menu.Option("Masters", nil, false, nil)
		menu.Option("PhD", nil, false, nil)
	}
	if selection == teacher {
		menu.Option("Faculty", nil, true, nil)
		menu.Option("Course Desription", nil, false, nil)
		menu.Option("Syllabus", nil, false, nil)
	}
	menu.Action(func(opts []wmenu.Opt) error {
		if len(opts) != 1 {
			return errors.New("wrong number of options chosen")
		}

		fmt.Printf("Your choice is %s for %s .\n", menuItemStrings[selection], opts[0].Text)

		return nil
	})
	return menu
}
