const Car = require('../models/carsModels');


const getCars = async(req,res)=>{
    try{
        const cars = await Car.find({});
        res.status(200).json(cars);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

const getCar = async(req,res)=>{
    try{
        const {id} = req.params;
        const car = await Car.findById(id);
        if(!car){
            res.status(404).json({message:"Car not found"});
        }
        res.status(200).json(car)
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const getCarByBrand = async(req,res)=>{
    try{
        const {brand} = req.params;
        const cars = await Car.find({brand});
        res.status(200).json(cars);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};   

const getCarByModel =async(req,res)=>{
    try{
        const {model} = req.params;
        const cars = await Car.find({model});                             
        res.status(200).json(cars);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const createCar = async(req,res)=>{
    try{
        const car = await Car.create(req.body);
        res.status(200).json(car);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const createCars = async(req,res)=>{
        try{
            const cars = await Car.insertMany(req.body);
            res.status(200).json({message:"Cars inserted sucessfully"});
        }catch(error){
            res.status(500).json({message:error.message});
        }
    };

    const updateCar = async(req,res)=>{
    try{
        const {id} = req.params;
        const car = await Car.findByIdAndUpdate(id,req.body);
        if(!car){
          return res.status(404).json({message:"car not found"});
        }
        const updatedcar = await Car.findById(id);
        res.status(200).json(updatedcar);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const deleteCar = async(req,res)=>{
    try{
        const {id} = req.params;
        const car = await Car.findByIdAndDelete(id);
        if(!car){
            res.status(404).json({message:"car not found"});
        }
        res.status(200).json({message:"car is deleted successfully"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
};



module.exports = {
    getCars,
    getCar,
    createCar,
    createCars,
    getCarByBrand,
    getCarByModel,
    updateCar,
    deleteCar
}