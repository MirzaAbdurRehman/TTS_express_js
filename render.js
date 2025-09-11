
const express = require('express');
const app = express();
const port = 3000;

app.get('/home', (req, res) => {
    res.send(
       `<h1>Welcome to the Home Page</h1>
        <a href="/contact">Contact</a>`
    );
});

app.get('/contact', (req, res) => {
    res.send(
        `<h1>Welcome to the contact Page</h1>
        <a href="/about">About</a>`
    );
});


app.get('/about', (req, res) => {
    res.send(   // json data
        [
            {name: "Ali", age: 30, isEligible: true},
            {name: "Sara", age: 25 , isEligible: false},
            {name: "Hassam", age: 22, isEligible: true}
        ]
    );
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});