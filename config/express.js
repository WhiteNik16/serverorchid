const express =require('express');
const app =express();

function serverListener (){
    const port=3000;
    app.get('/', function (req, res) {
        res.send('okey')})
    app.listen(port,console.log('Server running on port:',port))
}

module.exports = serverListener;






