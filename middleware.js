

const express = require('express');
const app = express();
const port = 3000;


const requestFilter = (req, res, next) => {
    const salary = req.query.salary;
    if(!salary) {
        res.send('Salary parameter is required');
    }else if(salary < 100000){
        res.send('You are not eligible to apply');
    }
    else {
        next();
    }
}

app.use(requestFilter);

app.get('', (req,res) => {
    res.send('Welcome to the home page');
});

app.get('/apply', (req, res) => {
    res.send('Welcome to the job application page');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
