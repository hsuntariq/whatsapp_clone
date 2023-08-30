const express = require('express');
const { register, getAllUsers, addStatus,getStatuses } = require('../controller/userController');
const router = express.Router();
router.post('/register', register);
router.get('/get-all-users', getAllUsers);
router.put('/update-status/:id', addStatus);
router.get('/get-statuses/', getStatuses);


module.exports = router;