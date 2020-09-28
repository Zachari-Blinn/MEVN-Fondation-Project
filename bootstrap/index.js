const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./src/config/config.db');
const port = process.env.PORT || 9000;

// Load config
dotenv.config({ path: './src/config/config.env' });

// Connect DataBase
connectDB();

const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World');
});
 
app.listen(port, function(){
  console.log(`Server running on port: ${port}`);
});