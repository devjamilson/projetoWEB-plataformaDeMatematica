const express = require('express');
const router = express.Router();
const desempenhoController = require('../controllers/desempenhoController');

// Rota GET para buscar todos os desempenhos
router.get('/', desempenhoController.getAllDesempenho);

// Rota POST para inserir um novo desempenho
router.post('/', desempenhoController.insertDesempenho);

module.exports = router;
