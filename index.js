var express = require('express')

var app = express()

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    res.json({ notes: "This is index and start!" })
})

app.get('/notes', function(req, res) {
    res.json({ notes: "This is your notebook. Edit this to start saving your notes!" })
})

//app.listen(3000)
app.listen(process.env.PORT || 5000)