const express = require('express');
const { register, getAllUsers, addStatus } = require('../controller/userController');
const router = express.Router();
router.post('/register', register);
router.get('/get-all-users', getAllUsers);
router.put('/update-status/:id', addStatus);


module.exports = router;