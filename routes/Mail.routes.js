const express = require('express');
const router = express.Router();
const { sendMail } = require('../controllers/Mail.controller');

router.post('/send', sendMail);

module.exports = router;