const Erro = require('../models/erro');

const erroController = {
    getAllErros: (req, res) => {
        Erro.findAll((err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    },
    createErro: (req, res) => {
        Erro.create(req.body, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: results.insertId });
        });
    },
    updateErro: (req, res) => {
        Erro.update(req.params.id, req.body, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Erro atualizado com sucesso!' });
        });
    },
    deleteErro: (req, res) => {
        Erro.delete(req.params.id, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Erro excluído com sucesso!' });
        });
    },
};

module.exports = erroController;
