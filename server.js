var path = require('path')
var express = require('express')
var exphbs = require('express-handlebars')

var app = express()
var port = process.env.PORT || 3000

app.use(express.static('static'))

app.engine("handlebars", exphbs.engine({
    defaultLayout: "main"
}))

app.set("view engine", "handlebars")

app.use(express.static('static'))

// Display Home page
app.get('', function (req, res, next) {
    res.status(200).render("homePage")
})

// Display Events page
app.get('/events', function (req, res, next) {
    res.status(200).render("eventsPage")
})

// Display Contact page
app.get('/contact', function (req, res, next) {
    res.status(200).render("contactPage")
})

// Display Testimonies page
app.get('/testimonials', function (req, res, next) {
    res.status(200).render("testimoniesPage")
})

app.listen(port, function () {
    console.log("== Server is listening on port", port)
})

