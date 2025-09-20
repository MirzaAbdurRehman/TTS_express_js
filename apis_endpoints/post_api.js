
const express = require('express');
const app = express();


const connectDB = require('../db/connect_db');
connectDB();

const empModel = require('../models/emp_model');

const port = 4000;


app.use(express.json()); // Middleware to use  parse JSON data into object documents request bodies    

app.post('/addEmployee', async (req, res) => {
    try{

        const {name, email, position, department} = req.body;  // Destructure the data from request body
        const newUser = new empModel({
            name,
            email,
            position,
            department
        });

        const addedUser = await newUser.save();
        res.status(201).json(addedUser);
        console.log('Employee added:', addedUser);


    }catch(error){
        console.error('Error adding employee:', error);
        res.status(500).send('Server error');
    }
});

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});  