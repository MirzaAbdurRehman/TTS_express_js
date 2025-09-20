
const express = require('express');
const app = express();

const connectDB = require('../db/connect_db');
connectDB();

const empModel = require('../models/emp_model');

const port = 3000;


app.get('/employee', async (req, res) => {   // get api to fetch all employees
    try{
        const users = await empModel.find();
        if(!users){
            res.status(404).send('No employee data found');
        }else{
            res.status(200).json(users);
        }
    }
    catch(error){
        console.error('Error fetching employees:', );error
        res.status(500).send('Server error');
    }
});


app.get('/employee/:id', async (req, res) => {   // get api to fetch employee by id
    try{
        const userId = req.params.id;
        const user = await empModel.findById(userId);
        if(!user){
            res.status(404).send('Employee not found');
        } else{
             res.status(200).json(user);
            }
        }catch(error){
            console.error('Error fetching employee:', error);
            res.status(500).send('Server error');
        }
})




app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
})

