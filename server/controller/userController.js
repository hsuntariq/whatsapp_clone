const AsyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const register = AsyncHandler(async (req, res) => {
    const {username,phone,password,photo} = req.body;
    if (!username || !phone || !password || !photo) {
        res.status(400);
        throw new Error('Please enter all the fields');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const checkUser = await User.findOne({ phone });
    if (!checkUser) {
        const newUser = await User.create({
            username,phone,password:hashedPassword,photo
        })
        res.json(newUser)
    } else {
        res.status(400);
        throw new Error('Phone number already registered');
    }

})


const getAllUsers = AsyncHandler(async (req, res) => {
    const users = await User.find();
    res.send(users)
})



module.exports = {
    register,
    getAllUsers
}