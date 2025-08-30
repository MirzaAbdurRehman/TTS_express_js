
const express = require('express'); // import ex[ress module
const app = express(); // ecxecute express function to create an app instance


app.get('', (req, res) => {
    res.send('Good Morning From Express JS');
});


app.get('/contact', (req, res) => {
    res.send('This is Contact Page');
});

app.get('/About', (req, res) => {
    res.send('This is About Page');
});

app.listen(1000);



