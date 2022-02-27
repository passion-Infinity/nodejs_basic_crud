const express = require('express');
const route = express.Router();
const services = require('../service/render');
const controller = require('../app/controllers/AccountController');

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * @description add users
 * @method GET /add-user
 */
route.get('/add-user', services.add_user);

/**
 * @description update users
 * @method GET /update-user
 */
route.get('/update-user', services.update_user);

// API
route.get('/api/users/:id', controller.find);
route.get('/api/users', controller.find);
// route.post('/api/users', controller.create);
route.post('/api/users', controller.update);

module.exports = route;
