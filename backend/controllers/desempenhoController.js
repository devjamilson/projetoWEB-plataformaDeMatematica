const Desempenho = require('../models/desempenho');

const desempenhoController = {
    getAllDesempenho: (req, res) => {
        Desempenho.findAll((err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    },
    createDesempenho: (req, res) => {
        Desempenho.create(req.body, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: results.insertId });
        });
    },
    updateDesempenho: (req, res) => {
        Desempenho.update(req.params.id, req.body, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Desempenho atualizado com sucesso!' });
        });
    },
    deleteDesempenho: (req, res) => {
        Desempenho.delete(req.params.id, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Desempenho excluído com sucesso!' });
        });
    },
};

module.exports = desempenhoController;
