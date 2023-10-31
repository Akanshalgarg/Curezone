const express = require('express');
const mongoose = require('mongoose');
require("./mongodb");

const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
})

// app.get('/login.html', (req, res) => {
//     res.sendFile(__dirname + '/login.html');
// })
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/index2', (req, res) => {
    res.sendFile(__dirname + '/index2.html');
})
app.get('/index2.html', (req, res) => {
    res.sendFile(__dirname + '/index2.html');
})
app.listen(3000, () => {
    console.log("Server is running at port 3000");
})




