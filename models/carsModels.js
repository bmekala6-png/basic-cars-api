const mongoose = require('mongoose')

const carsSchema = mongoose.Schema(
    {
        brand:{
            type:String,
            required:true
        },
        model:{
            type:String,
            required:true
        },
        price_per_car:{
            type: Number,
            required: true,
            default: 0
        },
        quantity:{
            type: Number,
            required:true,
            default: 0
        },
        image:{
            type: String,
            required:false
        }
    },
    {
        timestamps:true
    }
);

const car = mongoose.model("car",carsSchema);
module.exports = car;