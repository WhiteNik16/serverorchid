const express =require('express');
const mongoose =require('mongoose')
const app =express();
const cors = require('cors');
const router=require('./routes/routes');
const bodyParser =require('body-parser')
const port=3000;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());
app.options('*', cors());
app.use(router);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Nikita:1q2w3e4r@cluster0.1pvzl.mongodb.net/myFirstDatabase',
            {useUnifiedTopology: true, useNewUrlParser: true}
        )
        app.listen(port, ()=>{console.log('Server running on port:',port)})

    } catch (e) {
        console.log(e)
    }
}

start();





