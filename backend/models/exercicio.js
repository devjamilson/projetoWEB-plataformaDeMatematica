const db = require('../config/db'); // Conexão com o banco de dados

const Exercicio = {
    // Retorna todos os exercícios
    findAll: (callback) => {
        const sql = 'SELECT * FROM exercicios';
        db.query(sql, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    },

    // Retorna exercícios filtrados pela subarea
    findBySubarea: (subarea, callback) => {
        const sql = 'SELECT * FROM exercicios WHERE subarea = ?';
        db.query(sql, [subarea], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    }
};

module.exports = Exercicio;
