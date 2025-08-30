
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
    res.send('This is Contact Page');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});