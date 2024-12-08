var path = require('path')
var filePath = path.join(__dirname, 'testimonyData.json');
var express = require('express')
var exphbs = require('express-handlebars')
var fs = require('fs');
var Handlebars = require('handlebars');

var testimonyData = require("./testimonyData.json")

var app = express()
var port = process.env.PORT || 3000

app.use(express.static('static'))

app.engine("handlebars", exphbs.engine({
    defaultLayout: "main"
}))

app.set("view engine", "handlebars")

app.use(express.static('static'))

app.use(express.json());

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
    fs.writeFile(filePath, JSON.stringify(testimonyData, null, 2), function(err) {
        if (err) {
            console.error("Error writing to file:", err);  // Log the error for debugging
            return res.status(500).json({ message: "Server error. Try again soon." }); // Send a JSON response with error message
        } else {
            return res.status(200).json({ message: "Testimony saved successfully!" }); // Success response
        }
    });
  }) 

// Display Home page
app.get('', function (req, res, next) {
    var context = {
        firstTestimony: testimonyData[0].desc
    }
    res.status(200).render("homePage", context)
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
    var context = {
        testimonyData: testimonyData
    }
    res.status(200).render("testimoniesPage", context)
})

app.listen(port, function () {
    console.log("== Server is listening on port", port)
})

