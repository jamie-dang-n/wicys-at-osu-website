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

// Display Homepage
app.get('', function (req, res, next) {
    res.status(200).render("homePage")
})



app.listen(port, function () {
    console.log("== Server is listening on port", port)
})

