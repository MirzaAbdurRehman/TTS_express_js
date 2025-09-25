

const express = require('express');
const app = express();

const connectDB = require('../db/connect_db');
connectDB();

const empModel = require('../models/emp_model');

const port = 6000;


app.use(express.json()); // Middleware to use  parse JSON data into object documents request bodies


app.put('/updateEmployee/:id', async (req, res) => {  
    try{
        
        const userId = req.params.id;
        const {name, email, position, department} = req.body;  // Destructure the data from request body

        const UpdateUserData = await empModel.findByIdAndUpdate(
            userId,
            {name, email, position, department},
            {new: true}   // return the updated data 
            );

            if(!UpdateUserData){
                res.status(404).send('Employee not found');
            }else{
                res.status(201).json(UpdateUserData);
                console.log('Employee updated Successfully:', UpdateUserData);
            }
        }
        catch(error){
        console.error('Error updating employee:', error);
        res.status(500).send('Server error');
    }
});

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});