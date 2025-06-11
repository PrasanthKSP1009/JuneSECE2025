const express = require('express');
const dotenv = require("dotenv");
const app = express();
dotenv.config()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Welcome to June Session of Backend Server");
});

app.listen(PORT, ()=>{
    console.log(`Server is running successfully on port ${PORT}`);
})
