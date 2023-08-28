const AsyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const cron = require('node-cron');

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

const addStatus = AsyncHandler(async (req, res) => {
    const { status } = req.body;
    const user = await User.findById(req.params.id);
    const currentDate = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-US').format(currentDate);
    
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = currentDate.toLocaleString('en-US', options);

    const statusEntry = {
        index: user.statusContent.length + 1, // Auto-incrementing index
        status,
        statusUpdatedAt: {
            currentDay: currentDate.getDay(),
            currentDate: formattedDate,
            formattedTime: formattedTime,
        }
    };

    user.statusContent.push(statusEntry);

    if (user.statusContent.length > 0) {
        user.status = true;
    } else {
        user.status = false;
    }


    const updatedContent = await user.save();

    res.send(updatedContent);
});


// auto schedule the api call to the server

cron.schedule('0 0 * * *', async () => {
    try {
        // find all the users
        const users = await User.find();
        users.forEach(async user => {
            // current date
            const currentDate = new Date();
            // another date object to modify according to 24 hours
            const twentyFourHourAgo = new Date(currentDate);
            // set the hours to 24 hours earlier
            twenty
        })
    } catch (error) {
        
    }
})




module.exports = {
    register,
    getAllUsers,
    addStatus
}