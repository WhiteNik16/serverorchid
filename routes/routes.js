const {Router} =require('express');
const router =Router();
const User=require('../models/users')
const {log} = require("nodemon/lib/utils");
const bodyParser =require('body-parser')
const controllers =require('../controllers/controllers')





router.use(bodyParser.urlencoded({
    extended: false
}));

    router.get('/',controllers.getcontroll);

    router.post('/api/adduser',controllers.userAdd);
    router.post('/api/addorchid', controllers.orchidAdd);



module.exports = router;