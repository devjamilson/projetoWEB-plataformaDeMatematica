const db = require('../config/db'); // Conexão com o banco de dados

const Exercicio = {
    findAll: (callback) => {
        const sql = 'SELECT * FROM exercicios';
        db.query(sql, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    },
};

module.exports = Exercicio;
