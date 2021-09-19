const fs = require('fs');
const path = require('path');

const controller = {
    index: (req, res) => {

        res.render('index');
    },
    about: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/about.html'));
    },
};

module.exports = controller;