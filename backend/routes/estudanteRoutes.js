const express = require('express');
const router = express.Router();
const estudanteController = require('../controllers/estudanteController');

router.get('/', estudanteController.getAllEstudantes);
router.post('/', estudanteController.createEstudante);
// Adicione outras rotas conforme necessário

module.exports = router;
