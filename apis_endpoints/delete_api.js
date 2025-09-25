

const express = require('express');
const app = express();

const connectDB = require('../db/connect_db');
connectDB();

const empModel = require('../models/emp_model');

const port = 5000;


app.use(express.json()); // Middleware to use  parse JSON data into object documents request bodies

app.delete('/deleteEmployee/:id', async (req, res) => {
    try{
        const userId = req.params.id;
        const deletedUser = await empModel.findByIdAndDelete(userId);

        if(!deletedUser){
            res.status(404).send('Employee not found');
        }else{
            res.status(201).json({message: 'Employee deleted successfully', deletedUser});
            console.log('Employee deleted successfully:', deletedUser);
        }
    } catch(error){
        console.error('Error deleting employee:', error);
        res.status(500).send('Server error');
    }
});


app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});