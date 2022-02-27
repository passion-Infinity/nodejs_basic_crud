const express = require('express'); // base
const dotenv = require('dotenv');
const morgan = require('morgan'); //logger
const path = require('path');

const app = express();

const route = require('./routes/router');
const dbconnection = require('./app/database/dbconnection');

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan('tiny'));

// db connection
dbconnection();

// body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

// load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));

app.use('/', route);

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`),
);
