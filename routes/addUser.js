const express = require('express')
const router = express.Router()
const moment = require('moment');
const User = require('../models/customerSchema');
const userController = require('../controllers/userController');

router.get("", userController.user_add_get);
// post requests
router.post('', userController.user_add_post);

module.exports = router;