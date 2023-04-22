const express = require('express');
const routes = express.Router();
const functions = require('../controllers/');

routes.get('/', functions.get_name);
routes.get('/professional', functions.get_professionals);

module.exports = routes;