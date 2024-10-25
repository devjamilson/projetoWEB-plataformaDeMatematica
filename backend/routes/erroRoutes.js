const express = require('express');
const router = express.Router();
const erroController = require('../controllers/erroController');

router.get('/', erroController.getAllErros);
router.post('/', erroController.createErro);
router.put('/:id', erroController.updateErro);
router.delete('/:id', erroController.deleteErro);

module.exports = router;
