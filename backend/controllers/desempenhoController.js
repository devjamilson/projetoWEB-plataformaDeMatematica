const Desempenho = require('../models/desempenho');

const desempenhoController = {
    getAllDesempenho: async (req, res) => {
        try {
            const results = await Desempenho.getAll();
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    insertDesempenho: async (req, res) => {
        const { qtd_acertos, qtd_erros} = req.body;

        // Validação básica dos dados
        if (typeof qtd_acertos !== 'number' || typeof qtd_erros !== 'number' ) {
            return res.status(400).json({ error: 'Dados inválidos. Certifique-se de que todos os campos estão corretos.' });
        }

        try {
            const result = await Desempenho.insertDesempenho(qtd_acertos, qtd_erros);
            res.status(201).json({ message: 'Desempenho inserido com sucesso!', id: result.insertId });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = desempenhoController;
