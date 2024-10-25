const Estudante = require('../models/estudante');

const estudanteController = {
    getAllEstudantes: (req, res) => {
        Estudante.findAll((err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    },
    createEstudante: (req, res) => {
        Estudante.create(req.body, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: results.insertId });
        });
    },
    // Adicione outros métodos conforme necessário
};

module.exports = estudanteController;
