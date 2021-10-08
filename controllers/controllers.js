const express =require('express');
const User = require("../models/users");


function getcontroll(req, res) {
          User.find({},(err,user) =>{
               console.log(user)
               res.send(user[0].username)
          })

     }


async function postcontroll(req,res){
     console.log(req.body)
     const user= new User({
          username:req.body.username,
          password:req.body.password

     })

     await user.save()
     res.send('added')
}

module.exports = {getcontroll, postcontroll}