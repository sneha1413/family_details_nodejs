const express = require('express')
const router = express.Router()

const pract = require('../models/familydetail')
router.get('/',async(req,res) =>{
    try{
        const family = await pract.find()
        res.json(family)
    }
    catch(err){
        res.send('Error' +err)
    }
    // res.send('Get request')
})

router.get('/:id',async(req,res) =>{    ////family/7984ui1j3r532r672891rj/
    try{
        const family = await pract.findById(req.params.id)
        res.json(family)
    }
    catch(err){
        res.send('Error' +err)
    }
    // res.send('Get request')
})


router.post('/',async(req,res)=>{
    const alien = new pract({
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender

    })
    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('error')
    }
})
router.patch('/:id',async(req,res)=>{
    try{
        const family = await pract.findById(req.params.id)
        family.sub = req.body.sub
        const a1 = await family.save()
        res.json(a1)
    }
    catch(err){
        res.send('error')

    }
})
module.exports = router