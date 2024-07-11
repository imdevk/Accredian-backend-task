const express = require('express');
const referralController = require('../controllers/referralController');

const router = express.Router();

router.post('/referrals', referralController.createReferral);

module.exports = router;