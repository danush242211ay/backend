const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.registerUser);

router.get('/test',(req,res)=>{
    console.log(req.cookies);
    res.status(200).json({message:'Test route',cookies: req.cookies})
})

module.exports = router;