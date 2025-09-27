
const express = require('express');
const app = express();

const connectDB = require('../db/connect_db');
connectDB();

const multer = require('multer');
const fileModel = require('../models/file_model');
const port = 6000;


// Set up multer for file storage

const fileUpload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, callback){
            callback(null, '../upload/');
        },

        filename: function(req, file, callback){
           const uniqueName = file.fieldname + '-' + Date.now() + '-' + ".jpg";
           callback(null, uniqueName);
        }
    })
}).single('my_file');



app.post('/uploadFile', fileUpload, async (req, res) => {
    try{
        if(!req.file) {
            return res.status(400).send('No file uploaded');
        }
        else{
            const newFile = new fileModel({
                filePath: req.file.path
            });

            await newFile.save()
            .then(() => res.status(200).send('File uploaded and saved to database successfully'))
            .catch((error) => res.send('Error saving file to database: ' + error));
        }
    }
    catch(error){
        console.error('Error uploading file:', error);  
        res.status(500).send('Server error');}
});


app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
}); 
