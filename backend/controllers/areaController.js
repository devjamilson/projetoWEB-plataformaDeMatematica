const Area = require('../models/area');

const areaController = {
    getAllAreas: (req, res) => {
        Area.findAll((err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    },
    createArea: (req, res) => {
        Area.create(req.body, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: results.insertId });
        });
    },
    updateArea: (req, res) => {
        Area.update(req.params.id, req.body, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Área atualizada com sucesso!' });
        });
    },
    deleteArea: (req, res) => {
        Area.delete(req.params.id, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Área excluída com sucesso!' });
        });
    },
};

module.exports = areaController;
