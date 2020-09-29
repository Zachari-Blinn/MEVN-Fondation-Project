// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/config.db.js');

require('dotenv').config({
    path: './src/config/config.env'
});

// Load database
connectDB();

const app = express(); // create your express app

// make app use dependencies
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT, function(){
    console.log(`Server running on port: ${process.env.PORT}`);
});

