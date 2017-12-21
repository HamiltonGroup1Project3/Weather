//import dependencies
require('dotenv').config();
const express       = require('express');
const logger        = require('morgan');
const path          = require('path');
const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const session       = require('express-session');
const passport      = require('passport');

//initialize the app and set up dotenv
const app           = express();


