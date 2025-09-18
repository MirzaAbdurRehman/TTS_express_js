

const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://maddymirza159_db_user:Z71PNbSieXyOV8UB@cluster0.jpwdcbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'); // Add your MongoDB connection string here
        console.log('MongoDB connected successfully');
    }
    catch(error){
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
}

module.exports = connectDB;


