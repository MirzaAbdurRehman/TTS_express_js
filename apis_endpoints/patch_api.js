



const express = require('express');
const app = express();

const connectDB = require('../db/connect_db');
connectDB();

const empModel = require('../models/emp_model');

const port = 7000;


app.use(express.json());


app.patch('/updateEmployeeData/:id', async (req, res) => {
    try{
        const userId = req.params.id;
        const updateData = req.body;  // Get the fields to be updated from request body

        const updatedUser = await empModel.findByIdAndUpdate(
            userId,
            {$set: updateData},   // Use $set to update only the provided fields
            {new: true}          // Return the updated document
        );

        if(!updatedUser){
            res.status(404).send('Employee not found');
        }else{
            res.status(200).json(updatedUser);
            console.log('Employee Data updated successfully:', updatedUser);
        }

    }catch(error){
        console.error('Error updating employee:', error);
        res.status(500).send('Server error');
    }
});

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});


