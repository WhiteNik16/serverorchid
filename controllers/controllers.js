const express =require('express');
const User = require("../models/users");
const Orchid=require('../models/orchids')
const Order =require('../models/order')
const upload =require('multer')
const bodyparser=require('body-parser')
const fs =require('fs')
const path=require('path')



class orchidConntrolers {


     getcontroll(req, res) {
          User.find({}, (err, user) => {
               console.log(user)
               res.send(user[0].username)
          })

     }



     async orchidGet(req, res) {


          Orchid.find({}, (error, orchid) => {
               if(orchid) {
                    res.status(200).send(orchid)
               }
               else{
                    res.status(400).send('Что-то пошло не так')
               }
               })


     }

     async orchidDelete(req, res){
      try{
           console.log(req.body)

           await Orchid.findOne({'article':req.body.article},(error, result) => {
                if(error) {
                     console.log( error)
                }
                else {
                     if(result) {
                               fs.unlink((__dirname, 'uploads/' + result.image), function (e) {
                                    if (e) {
                                         console.log('ошибка:', e)
                                    }


                               })
                     }
                     }
                }).clone()
           let articledelete =req.body.article
           await Orchid.deleteOne({article:articledelete})
           res.status(200).send('Product delete')
      }
      catch (e){
           console.log(e)
           res.status(400).send(e)
      }
     }

     async orderAdd(req,res){
          try{
               console.log(req.body)
               const order = new Order({
                    name: req.body.name,
                    surname: req.body.surname,
                    address: req.body.address,
                    nummberhouse: req.body.nummberhouse,
                    city: req.body.city,
                    region: req.body.region,
                    postindex: req.body.postindex,
                    article: req.body.article

               })
               await order.save()
               res.send('200')

          }
          catch (e){
               console.log(e)
               res.status(400).send(e)
          }
     }

     async orchidAdd(req, res) {
          try {
               console.log(req.body)
               let filedata = req.file;
               console.log('Filedata',filedata)
               const orchid = new Orchid({
                    name: req.body.name,
                    price: req.body.price,
                    image: req.file.filename,
                    article: req.body.article,
                    quantityFlo: req.body.quantityFlo,
                    description: req.body.description,

               })

               await orchid.save()

               res.status(201).send('Файл загружен')
          }
          catch (e){
               console.log(e)
               res.send(400).send(e)
          }

     }

}
module.exports = new orchidConntrolers()