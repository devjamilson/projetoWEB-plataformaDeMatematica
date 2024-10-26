const Exercicio = require('../models/exercicio');

const exercicioController = {
    // Obtém todos os exercícios
    getAllExercicios: (req, res) => {
        Exercicio.findAll((err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    },

    // Obtém exercícios filtrados pela subarea
    getExerciciosBySubarea: (req, res) => {
        const { subarea } = req.query; // Obtém a subarea da query string

        // Verifica se a subarea foi fornecida
        if (!subarea) {
            return res.status(400).json({ error: 'A subarea é necessária.' });
        }

        Exercicio.findBySubarea(subarea, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            // Verifica se foram encontrados resultados
            if (results.length === 0) {
                return res.status(404).json({ message: 'Nenhum exercício encontrado para a subarea fornecida.' });
            }

            res.json(results);
        });
    },
};

module.exports = exercicioController;

