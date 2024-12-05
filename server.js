var path = require('path')
var express = require('express')
var exphbs = require('express-handlebars')

var testimonyData = require("./testimonyData.json")

var app = express()
var port = process.env.PORT || 3000

app.use(express.static('static'))

app.engine("handlebars", exphbs.engine({
    defaultLayout: "main"
}))

app.set("view engine", "handlebars")

app.use(express.static('static'))

// Server endpoint for receiving new testimony info
app.post('/testimonials/addTestimony', function(req, res, next) {

    // store data into the database
    testimonyData.push({
        name: req.body.name,
        desc: req.body.desc,
        url: req.body.url,
        alt: req.body.alt,
        date: req.body.date
    }) 

    // Write to testimonyData.json
    fs.writeFile(
        __dirname + "/testimonyData.json",
        JSON.stringify(testimonyData, null, 2),
        function(err, result) {
            if (err) {
                res.status(200).send()
            } else {
                res.status(500).send("Server error. Try again soon.")
            }
        }
    )
    next()
  }) 

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
    context = {
        testimonyData: testimonyData
    }
    res.status(200).render("testimoniesPage", context)
})

app.listen(port, function () {
    console.log("== Server is listening on port", port)
})

