const express = require('express');
const { register, getAllUsers, addStatus,getStatuses,getUserSession, findSingleUser } = require('../controller/userController');
const router = express.Router();
router.post('/register', register);
router.get('/get-all-users', getAllUsers);
router.get('/get-user-session', getUserSession);
router.put('/update-status/:id', addStatus);
router.get('/get-statuses/', getStatuses);
router.get('/find-user/:id', findSingleUser);

module.exports = router;