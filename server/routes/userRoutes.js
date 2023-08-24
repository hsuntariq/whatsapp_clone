const express = require('express');
const { register, getAllUsers } = require('../controller/userController');
const router = express.Router();
router.post('/register', register);
router.get('/get-all-users', getAllUsers);


module.exports = router;