const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

// Register a new user
router.post('/register', registerUser);

// Login a user and return a JWT token
router.post('/login', loginUser);

// Example of a protected route
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
