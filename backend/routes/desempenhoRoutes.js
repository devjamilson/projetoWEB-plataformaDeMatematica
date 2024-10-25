const express = require('express');
const router = express.Router();
const desempenhoController = require('../controllers/desempenhoController');

router.get('/', desempenhoController.getAllDesempenho);
router.post('/', desempenhoController.createDesempenho);
router.put('/:id', desempenhoController.updateDesempenho);
router.delete('/:id', desempenhoController.deleteDesempenho);

module.exports = router;
