//importo express
const express = require('express');
//definisco la variabile router
const router = express.Router();

//imprto il controller
const movieController = require('../controllers/movieController');


//definisco le rotte
router.get('/', movieController.index);

router.get('/:id', movieController.show);

router.post('/reviews', movieController.store);

module.exports = router;