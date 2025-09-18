const express = require('express');
const app = express();  
const connectDB = require('./db/connect_db');
connectDB();
const empModel = require('./models/emp_model');

const port = 4000;


const getUserData = async() => {
try{
     const user = await empModel.find();
    console.log('Employees: ', user);
}catch(error){
    console.error('Error fetching users:', error);
}
}


const updateUserData = async(id, updateData) => {
    try{
        const rsult = await empModel.updateOne({_id: id}, {$set: updateData});
        console.log('Update Result: ', rsult);
    }catch(error){
        console.error('Error updating user:', error);
    }
}


const deleteUserData = async(id) => {
    try{
        const result1 = await empModel.deleteOne({_id: id});
        console.log('Delete Result: ', result1);
    }catch(error){
        console.error('Error deleting user:', error);
    }
}


const main = async() => {

    // console.log('Before Update:');
    // await getUserData();


    const empId = '68c8f2944779a5d565622d04';
    const updateData = {
        position: "Data Scientist",
        department: "R&D",
        email: "salman@gmail.com",
        name: "Salman"
    };

    await updateUserData(empId, updateData);
    console.log('After Update:');
    await getUserData();


    // const idToDelete = '68c8f2475945361afec21d5a';
    // await deleteUserData(idToDelete);
    // console.log('After Deletion:');
    // await getUserData();
}



main();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

