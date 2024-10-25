const Exercicio = require('../models/exercicio');

const exercicioController = {
    getAllExercicios: (req, res) => {
        Exercicio.findAll((err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    },
};

module.exports = exercicioController;
