const express = require('express');
const app = express();
const http = require('http');
require('dotenv').config();
require('colors');
const cors = require('cors');
const connectDB = require('./config/connect');
const session = require('express-session')
const { Server } = require('socket.io');
const {
    errorHandler
} = require('./middlewares/errorMiddleware');
// allow cross site requests
app.use(cors());
// create an http server

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3001',
        methods:["GET","POST"],
    },
})

// listen to the socket connection
io.on('connection', (socket) => {
    console.log(socket.id);
})


// connect to the database

connectDB()
// get the data from the body
app.use(express.json())
// use session storage
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized:true,
    })
)
app.use(express.urlencoded({
    extended: false
}))

app.use('/api/user/',require('./routes/userRoutes'))
// router for chat
app.use('/api/chat/',require('./routes/chatRoutes'))
// check for errors
app.use(errorHandler)

//listen to the server

server.listen(3001,()=>console.log(`Server started on port ${3001}`))