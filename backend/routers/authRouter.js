const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getMyUser } = require('../controllers/authController');
const { authMiddleware } = require('../middleware/userMiddleware');

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/me', authMiddleware, getMyUser)

module.exports = router