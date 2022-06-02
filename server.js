const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
    res.send("Home page")
})

app.get('/art', (req, res) => {
    res.send("Art")
})

app.get('/design', (req, res) => {
    res.send("Design")
})

app.get('/development', (req, res) => {
    res.send("Development")
})

app.get('/about', (req, res) => {
    res.send("About")
})

app.get('/contact', (req, res) => {
    res.send("Contact")
})

const server = http.createServer(app);

server.listen(3000)

console.log('Listening on port 3000');
