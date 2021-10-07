const express =require('express');
const app =express();
const getcontroll = require('../controllers/controllers')

function router() {
    app.get('/', function (req, res) {
            getcontroll()
        }
    )
}
module.exports = router;