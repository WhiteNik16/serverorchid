const {Router} =require('express');
const router =Router();
const User=require('../models/users')
const {log} = require("nodemon/lib/utils");
const bodyParser =require('body-parser')
const orchidControllers =require('../controllers/controllers')





router.use(bodyParser.urlencoded({
    extended: false
}));

    router.get('/',orchidControllers.getcontroll);

    router.post('/api/adduser',orchidControllers.userAdd);
    router.post('/api/addorchid', orchidControllers.orchidAdd);



module.exports = router;