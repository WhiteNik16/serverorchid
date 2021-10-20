const express =require('express')
const {Router} =require('express');
const router =Router();
const User=require('../models/users')
const {log} = require("nodemon/lib/utils");
const bodyParser =require('body-parser')
const orchidControllers =require('../controllers/controllers')
const multer = require("multer");

const storageConfig =multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, "uploads");
    },
    filename:(req, file, cb) =>{
        cb(null, file.originalname);
    }
});
router.use(express.static('static'));

router.use(multer({storage:storageConfig}).single('file'));
router.use(bodyParser.urlencoded({
    extended: false
}));

    router.get('/',orchidControllers.getcontroll);

    router.get('/api/products',orchidControllers.orchidGet);
    router.post('/api/addorchid', orchidControllers.orchidAdd);



module.exports = router;