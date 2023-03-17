const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home Page')
})


app.get('/weather', (req, res) => {
    res.send('Weather is called')
})

app.get('/support', (req, res) => {
    res.send('support')
})

app.listen(8080, () => {
    console.log('Server is started...')
})


