const express = require('express');
const router = express.Router();

router.get('/test',(req,res) =>{
    res.status(200).json({"message":"Test Route is working fine"});
})
router.post('/signup',(req,res) =>{
    const {fname,lname,username,email,password} = req.body;
    console.log(fname,lname,username,email,password);
    res.status(200).json({"message":"User Sign up Successful"});
})

module.exports = router;