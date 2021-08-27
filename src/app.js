const express = require('express');
const app = express();

const path = require('path');

app.listen('3000', () => console.log('Todo bien por aca'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/about.html'));
})