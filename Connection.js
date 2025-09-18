
const express = require('express');
const app = express();
const connectDB = require('./db/connect_db');
connectDB();
const userModel = require('./models/user_model');
const port = 4000;


const addUser = async () => {
    await userModel.create({
        name: "Najeeb Jafri",
        email: "najeeb12@gmail.com",
        age: 25
    });
    console.log("User added");
}

addUser();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});