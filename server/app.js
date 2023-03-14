var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db=require('./config/connection')
var indexRouter = require('./routes/index');

db.connect().then(()=>console.log("database connected successfully")).catch(()=>console.log("database connection failed"))
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);


module.exports = app;
