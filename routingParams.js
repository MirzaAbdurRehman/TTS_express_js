
const express = require('express'); // import ex[ress module
const app = express(); // ecxecute express function to create an app instance

// Query Parameters
// http://localhost:1000/products?category=fruit&name=apple  (value pair after ? is query parameter)
// http://localhost:1000/products?category=vegetable&name=carrot

app.get('', (req, res) => {

    const Name = req.query.name;  // Query Parameter
    res.send(`Good Morning ${Name} From Express JS`);
});

app.listen(2000);



