const express = require('express');
const router = express.Router();
const MenuItem = require('../model/MenuItem');
const { message } = require('prompt');


router.post('/',  async(req, res) =>{
    try{
      const data = req.body;
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log('Menu data received');
      res.status(200).json(response);
    }catch(err) {
      console.log(err);
      res.status(500).json({Error: 'Internal Sever Error hai bhai'});
    }
});

//get method


router.get('/', async(req, res) =>{
    try{
        const data = await MenuItem.find();
        console.log('data fetches');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
});

router.get('/:taste', async(req, res)=>{
    try{
      const validTaste = ['sweet', 'sour','spicy'];
      const {taste} = req.params;
      //'sweet', 'spicy', 'sour'
      if(!validTaste.includes(taste)) {
        return res.status(400).json({message : 'Kindly choose valid taste'});
      }
      const response = await MenuItem.find({taste : taste});
      return res.status(200).json(response);
    }catch(err) {
        console.log(err);
        return res.status(500).json({error : 'Internal Server error'});
    }
});

module.exports = router;