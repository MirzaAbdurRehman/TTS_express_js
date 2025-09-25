

const express = require('express');
const app = express();

const connectDB = require('../db/connect_db');
connectDB();

const empModel = require('../models/emp_model');

const port = 6000;


app.use(express.json()); // Middleware to use  parse JSON data into object documents request bodies


app.get('/searchUser/:value', async (req, res) => {
    try{

        let searchValue = req.params.value;

        let result = await empModel.find({
            "$or" : [
                {'name': {$regex: searchValue, $options: 'i'}},
                {'email': {$regex: searchValue, $options: 'i'}},
                {'position': {$regex: searchValue, $options: 'i'}},
                {'department': {$regex: searchValue, $options: 'i'}}
            ]
        });

        res.status(200).json(result);
        console.log('Search result:', result);

    }catch(error){
        console.error('Error searching User:', error);
        res.status(500).send('Server error');
    }
});

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});