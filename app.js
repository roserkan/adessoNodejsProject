require('./src/dataAccess/database/connect');
const routerMiddleware = require('./src/middlewares/routerMiddleware');
const errorHandlerMiddleware = require('./src/middlewares/errorHandlerMiddleware');
require('dotenv').config({ path: 'config.env' })
const express = require('express');
const cors = require('cors');

const app = express();

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }


function configure() {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    routerMiddleware(app);

}


configure();
app.listen(process.env.PORT, () => console.log("Port "+ process.env.PORT));
