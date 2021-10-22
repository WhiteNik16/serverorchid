const express =require('express');
const User = require("../models/users");
const Orchid=require('../models/orchids')
const upload =require('multer')
const bodyparser=require('body-parser')
const fs =require('fs')



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
           let articledelete =req.body.article
          await Orchid.deleteOne({article:articledelete})
           res.status(200).send('Product delete')

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