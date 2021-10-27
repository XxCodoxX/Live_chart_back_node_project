var router = require('express').Router();
var {getDeviceDataController} = require('../controllers/mainController');
var {getSelectDeviceDataController} = require('../controllers/mainController');


router.get('/devicedata', getDeviceDataController);
router.get('/selectdevicedata/:deviceId/:startTime/:endTime', getSelectDeviceDataController);


module.exports = router;