const express = require('express');
const router = express.Router();
const webController = require('../controllers/webController');

module.exports = () => {
    router.get('/', webController.home);
    router.get('/menu', webController.getMenu);
    router.get('/mesas', webController.getMesas);


    
    return router;
}