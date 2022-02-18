package controllers

import (
	"github.com/gofiber/fiber/v2"
)

func Getbook(c *fiber.Ctx) error {
	return c.SendString("I got itttt")

}
