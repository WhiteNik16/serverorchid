const express =require('express');
const User = require("../models/users");
const Orchid=require('../models/orchids')


function getcontroll(req, res) {
          User.find({},(err,user) =>{
               console.log(user)
               res.send(user[0].username)
          })

     }


async function userAdd(req,res) {
     console.log(req.body)
     const user = new User({
          username: req.body.username,
          password: req.body.password

     })
     await user.save()
     res.send('ad orchid')
}
     async function orchidAdd(req,res){
          console.log(req.body)
          const orchid= new Orchid({
               name:req.body.name,
               price:req.body.price

          })

     await orchid.save()
          Orchid.find({},(error, orchid) =>
          res.send(orchid))
     res.status(201)
}

module.exports = {getcontroll, userAdd, orchidAdd}