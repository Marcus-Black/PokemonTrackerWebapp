const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post('/register', (req, res) => {
    try {
        res.status(201).json({ message: 'User registration endpoint' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/login', (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        res.sendStatus(401);
    }
    try {
        //do something with the db to find person verify password and verify role
        const token = jwt.sign({
            "username": username,
            "role": "admin",
            "exp": Math.floor(Date.now() / 1000) + (60 * 60)
        }, process.env.JWT_KEY, { algorithm: 'RS256' });
 } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
