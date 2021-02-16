const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');

// Load env vars
dotenv.config({ path: 'config/config.env' });

// Connect to DB
connectDB();

// Load passport config
require('./config/passport')(passport);

const app = express();

// Morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Express session
app.use(session({
  secret: 'secret keyboard',
  resave: false,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Mount routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}...`.yellow.bold));