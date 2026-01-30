require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const Car = require('./models/carsModels');
const carsRoute = require('./routes/carsRoute')
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/cars',carsRoute);

app.get('/',(req,res)=>{
    res.send("you are in the cars webpage");
})

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('connected to db');
    app.listen(process.env.PORT,(req,res)=>{
        console.log(`App is listening to the port: ${process.env.PORT}`);
});
})
.catch((error)=>{
    console.error("connection failed:",error.message);
});

