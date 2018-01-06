//import dependencies
!( 'NODE_ENV' in process.env ) && require('dotenv').config();
const express         = require('express');
const logger          = require('morgan');
const path            = require('path');
const bodyParser      = require('body-parser');

// //import controller
// const locationsController = require('./controllers/locationsController');

// routes
const locationRoutes = require('./routes/locationRoutes');
const typeRoutes = require('./routes/typeRoutes');


//connect port to server
const PORT = process.env.PORT || 3000;

//initialize the app and set up dotenv
const app = express();

//set up static file
app.use(express.static(path.join(__dirname, 'dist')));

//import logger and body parser
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.use('/api/locations', locationRoutes);
app.use('/api/types', typeRoutes);

// app.get('/test', controller.index, (req, res, next) => {
//   res.send('it worked');
// });

app.get('*', (req, res) =>{
  res.status(400).json({
    message: 'not found',
  });
});

//set up port listener at the bottom here
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});


