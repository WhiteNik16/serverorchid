const express =require('express');
const serverListener =require('./config/express');
const app =express();
const router=require('./routes/routes');


router();
serverListener();



