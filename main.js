var express = require('express')
var telegraf = require('./bot')
var parser = require('body-parser')
var app = express()

const bot = telegraf.instance

app.use(express.static('public'))
app.use(parser.json())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/index.html')
})

app.post('/webhook', (request, response) => {
    
    let body = request.body

    bot.handleUpdate(body, response.sendStatus(200))

})


var listener = app.listen(3000, () => {
    console.log('Server is Running')
})