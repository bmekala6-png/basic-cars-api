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


mongoose.connect(
    "mongodb+srv://balaiahyadav12_db_user:1RneFoMBLxomCFVc@cluster0.azdlzed.mongodb.net/?appName=Cluster0"
)
.then(()=>{
    console.log('connected to db');
    app.listen('2001',(req,res)=>{
        console.log("App is listening to the port: 2001");
});
})
.catch((error)=>{
    console.error("connection failed:",error.message);
});

