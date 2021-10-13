const express =require('express');
const User = require("../models/users");
const Orchid=require('../models/orchids')
const upload =require('multer')
const bodyparser=require('body-parser')


class orchidConntrolers {


     getcontroll(req, res) {
          User.find({}, (err, user) => {
               console.log(user)
               res.send(user[0].username)
          })

     }


     async userAdd(req, res) {
          console.log(req.body)
          const user = new User({
               username: req.body.user.username,
               password: req.body.user.password,
               name:req.body.user.name,
               surname:req.body.user.surname,
               email:req.body.user.email,
               male:req.body.user.male

          })
          await user.save()
          res.status(201).send('Пользователь успешно зарегестрирован')
     }

     async orchidAdd(req, res) {
          console.log(req.body)
          const orchid = new Orchid({
               name: req.body.name,
               price: req.body.price

          })

          await orchid.save()
          Orchid.find({}, (error, orchid) =>
              res.send(orchid))
          res.status(201)
     }
}
module.exports = new orchidConntrolers()