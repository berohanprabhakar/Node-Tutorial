const express = require('express');
const users = require('./MOCK_DATA.json');
const {connectMongoDB} = require('./connection')
const userRouter = require('./routers/user')

const fs = require('fs');
const { type } = require('os');
const app = express();
const PORT = 3000;

// connection with db
connectMongoDB('mongodb://127.0.0.1:27017/Userdata-app');

// routes
app.use("/user", userRouter);

// middleware
app.use(express.urlencoded({ extended : false}));




app.listen(PORT, () => { console.log("Server started at:", PORT)});