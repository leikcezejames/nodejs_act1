const express = require('express');
const router = express.Router();
const ph = require('../controller/ezeck');

router.get('/', ph.index);
router.get('/about', ph.about);
router.get('/project', ph.project);
router.get('/services', ph.services);
router.get('/contact', ph.contact);

module.exports = router; 
