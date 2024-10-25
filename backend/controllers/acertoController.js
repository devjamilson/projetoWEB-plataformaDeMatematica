const Acerto = require('../models/acerto');

const acertoController = {
    getAllAcertos: (req, res) => {
        Acerto.findAll((err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    },
    createAcerto: (req, res) => {
        Acerto.create(req.body, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: results.insertId });
        });
    },
    updateAcerto: (req, res) => {
        Acerto.update(req.params.id, req.body, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Acerto atualizado com sucesso!' });
        });
    },
    deleteAcerto: (req, res) => {
        Acerto.delete(req.params.id, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Acerto excluído com sucesso!' });
        });
    },
};

module.exports = acertoController;
