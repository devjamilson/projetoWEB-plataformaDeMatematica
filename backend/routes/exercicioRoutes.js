const express = require('express');
const router = express.Router();
const exercicioController = require('../controllers/exercicioController');

// Rota para obter todos os exercícios
router.get('/', exercicioController.getAllExercicios);

module.exports = router;
