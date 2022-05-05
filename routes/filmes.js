const express = require('express');
const router = express.Router();
const FilmesController = require('../controllers/FilmesController')

/* GET users listing. */
router.get('/list', FilmesController.index);
router.post('/store', FilmesController.store);
  

module.exports = router;
