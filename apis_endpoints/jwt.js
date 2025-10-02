

const express = require('express')
const app =  express();

const jwt = require('jsonwebtoken')
const secretKey = 'mirza@123!';

const port = 3000;


app.use(express.json())  // ✅ Correct  // Middleware to use  parse JSON data into object documents request bodies

app.post('/login', (req, res) => {
    const user = {  // payload
        name: 'kashif',
        email: 'kashif12@gmail.com'
    }


    // Generate Token
    const token = jwt.sign({user}, secretKey, {expiresIn: '300s'});  // token siging
    res.status(200).json({token});
});


const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if(bearerHeader){
        const token = bearerHeader.split(' ')[1];
        req.token = token;
        next();
    }
    else{
        res.status(403).json({message: "Access Denied: Token is missing or Invalid!..."});
    }
}


app.post('/protected', verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (error, authData) =>{
        if(error){
            res.status(403).json({message: 'Unauthorized: Invalid Token'})
        }else{
            res.status(200).json({
                message: 'You are Authorized User',
                authData
            });
        }
    });
});

app.listen(port , () =>{
    console.log(`Server is ruuning on port: ${port}`);
})