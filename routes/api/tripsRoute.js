const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location,  Traveler, Trip } = require('../../models');

router.get('/', async (req,res) =>{
    try {
        const tripData = await Trip.findAll({
            include: [{model:Location},{model:Traveler}]
        });
        res.status(200).json(tripData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req,res) =>{
    try {
        const tripData = await Trip.findByPK(req.params.id,{
            include: [{model:Location},{model:Traveler}]
        });
        if(!tripData){
            res.status(404).json({ message: "No traveler found with that ID!"})
        }
        res.status(200).json(tripData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req,res) =>{
    try {
        const tripData = await Trip.create(req.body);
        res.status(200).json(tripData)
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const tripData = await Trip.destroy({
            where: {
              id: req.params.id,
            },
          });
          if(!tripData){
            res.status(404).json({ message: "No traveler found with that ID!"})
          }
          res.status(200).json(tripData)
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;