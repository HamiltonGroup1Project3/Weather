//import dependencies
require('dotenv').config();
const express         = require('express');
const logger          = require('morgan');
const path            = require('path');
const bodyParser      = require('body-parser');
const cookieParser    = require('cookie-parser');
const session         = require('express-session');
const passport        = require('passport');
const methodOverride  = require('method-override');
const ejs             = require('ejs');

//import controller
const controller = require('./BackEnd/controllers/beerControllers');

//connect port to server
const PORT            = process.env.PORT || 3001

//initialize the app and set up dotenv
const app             = express();

//set up static file
app.use(express.static(path.join(__dirname, 'public')));

//import logger and body parser
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());


//on index (home route), display the following:
app.get('/', (req, res) => {
  res.json({
    documentTitle: 'If you can see this, then the server is running on 3000',
    subTitle:      'Hooray!',
  });
});

app.get('/test', controller.index, (req, res, next) => {
  res.send('it worked');
});

app.get('*', (req, res) =>{
  res.status(400).json({
    message: 'not found',
  });
});

//set up port listener at the bottom here
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});


