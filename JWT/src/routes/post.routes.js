const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/create', (req, res) => {
    // Logic to create a post
    console.log(req.body);
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded);
        // Proceed with creating the post
        
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
});

module.exports = router;