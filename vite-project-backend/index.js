const express = require('express');
const dotenv = require("dotenv");
const signupController = require("./controllers/signup")


const app = express();

app.use(express.json());
dotenv.config()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Welcome to June Session of Backend Server");
});
app.use('/',signupController)

app.listen(PORT, ()=>{
    console.log(`Server is running successfully on port ${PORT}`);
})
