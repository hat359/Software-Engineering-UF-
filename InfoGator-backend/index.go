package index

import ( // "encoding/json"

	// "github.com/gorilla/mux"

	"hello/controllers"
	"hello/travel"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {

	app.Get("/", controllers.Getbook)
	app.Get("/api/travel/", travel.Travelinfo)
}

func main() {

	app := fiber.New()

	Setup(app)


	app.Listen(":8000")
}

