const express = require('express')
const User = require('../model/User')
const router = express.Router()

router.post('/', async(req, res) =>{
    try{
        const {email, passward, name} =req.body

        const userData = new User({
            "email": email,
            "passward" : passward,
            "name" : name
        })

        await userData.save()
        res.status(201).send({msg:'User added succcessfully', data: userData})
    } catch (error) {
        console.log(error)
    }
});

module.exports = router
