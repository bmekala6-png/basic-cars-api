const express = require('express');
const Car = require('../models/carsModels');
const router = express.Router();
const {getCars,getCar,getCarByBrand,getCarByModel,createCar,createCars,updateCar,deleteCar} = require('../controllers/carController');

router.get('/',getCars);
router.get('/:id',getCar);
router.get('/brand/:brand',getCarByBrand);
router.get('/model/:model',getCarByModel);


router.post('/',createCar);
router.post('/bulk',createCars);

//update
router.put('/:id',updateCar);

//delete
router.delete('/:id',deleteCar);

module.exports = router;