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

// Create express app
const app = express();

// make app use dependencies
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT, function(){
    console.log(`___________________________________________`);
    console.log(`SERVER: DONE`);
    console.log(`PORT: ${process.env.PORT}`);
    console.log(`___________________________________________`);
});

