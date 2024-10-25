const express = require('express');
const router = express.Router();
const acertoController = require('../controllers/acertoController');

router.get('/', acertoController.getAllAcertos);
router.post('/', acertoController.createAcerto);
router.put('/:id', acertoController.updateAcerto);
router.delete('/:id', acertoController.deleteAcerto);

module.exports = router;
