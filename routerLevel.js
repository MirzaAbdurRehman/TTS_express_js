

const express = require('express');
const Middleware = require('./routermiddleware');
const app = express();

const route = express.Router();
route.use(Middleware);

const port = 4000;


app.get('/', (req, res) => {
    res.send('Welcome to the home page');
});

route.get('/contact', Middleware,(req, res) => {
    res.send('Welcome to the contact us page');
});

route.get('/contactus', Middleware,(req, res) => {
    res.send('Welcome to the contact us page');
});

app.use('/', route);  // starting point of the application

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



