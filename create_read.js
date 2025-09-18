

const express = require('express');
const app = express();
const connectDB = require('./db/connect_db');
connectDB();
const empModel = require('./models/emp_model');
const port = 4000;  


const addEmployee = async () => {       
    await empModel.create({
        name: "Alex",
        email: "alex12@gmail.com",
        position: "AI",
        department: "IT"
    });
    console.log("Employee added");
}

addEmployee();


const getEmployees = async () => {

    try{
           const employess = await empModel.find();
           console.log(employess);
    }catch(error){
        console.error('Error fetching employees:', error);
    }
}


getEmployees();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});








