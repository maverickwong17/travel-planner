const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Traveler } = require('../../models');

router.get('/', async (req,res) =>{
    try {
        const travlerData = await Traveler.findAll({

        });
        res.status(200).json(travlerData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req,res) =>{
    try {
        const travlerData = await Traveler.findByPK(req.params.id,{

        });
        if(!travlerData){
            res.status(404).json({ message: "No traveler found with that ID!"})
        }
        res.status(200).json(travlerData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req,res) =>{
    try {
        const travlerData = await Traveler.create(req.body);
        res.status(200).json(travlerData)
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const travlerData = await Traveler.destroy({
            where: {
              id: req.params.id,
            },
          });
          if(!travlerData){
            res.status(404).json({ message: "No traveler found with that ID!"})
          }
          res.status(200).json(travlerData)
    } catch (err) {
        res.status(500).json(err);
    }
})