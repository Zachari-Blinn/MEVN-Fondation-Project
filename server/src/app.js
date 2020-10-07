// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/config.db.js');

require('dotenv').config({path: './src/config/config.env'});

// Load database
connectDB();

// Create express app
const app = express();

// make app use dependencies
app.use(morgan('dev'));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup public folder
app.use(express.static('public'));

app.use(cors());

// Function routes
app.use('/advertisement', require('./routes/advertisement.route'));
app.use('/people', require('./routes/people.route'));
app.use('/company', require('./routes/company.route'));
app.use('/candidacy', require('./routes/candidacy.route'));

// Views routes
app.get('/',function (req, res) {res.render('home')});

function State(type, status, port, env) {
    this.type = type;
    this.status = status;
    this.port = port;
    this.env = env;
}

let server = new State("SERVER", "OK", process.env.PORT, process.env.NODE_ENV);

app.listen(process.env.PORT, function(){
    console.clear();
    console.log("\x1b[44m%s\x1b[0m" ,"Starting Server");
    console.table([server]);
});

