const express = require('express');

const multer = require('multer');
const uploadConfig = require('./configs/upload');

const sessionController = require('./controllers/session-controller');
const spotController = require('./controllers/spot-controller');
const dashController = require('./controllers/dashboard-controller');
const bookingController = require('./controllers/booking-controller');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/users/create', sessionController.CREATE);

routes.get('/spots/:id', spotController.GET_ONE);
routes.post('/spots/create', upload.single('file'), spotController.CREATE);
routes.post('/spots/search', spotController.SEARCH);

routes.get('/dashboard/home',  dashController.SHOW);

routes.post('/bookings/create', bookingController.CREATE);


module.exports = routes; 