const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location } = require('../../models');

router.get('/', async (req,res) =>{
    try {
        const locationData = await Location.findAll({

        });
        res.status(200).json(locationData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req,res) =>{
    try {
        const locationData = await Location.findByPK(req.params.id,{

        });
        if(!locationData){
            res.status(404).json({ message: "No location found with that ID!"})
        }
        res.status(200).json(locationData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req,res) =>{
    try {
        const locationData = await Location.create(req.body);
        res.status(200).json(locationData)
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const locationData = await Location.destroy({
            where: {
              id: req.params.id,
            },
          });
          if(!locationData){
            res.status(404).json({ message: "No location found with that ID!"})
          }
          res.status(200).json(locationData)
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;