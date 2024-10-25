const db = require('../config/db');

const Erro = {
    create: (id_exercicio, id_area) => {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO erros (id_exercicio, id_area) VALUES (?, ?)';
            db.query(sql, [id_exercicio, id_area], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results.insertId);
            });
        });
    },
    
    getAll: () => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM erros';
            db.query(sql, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
};

module.exports = Erro;
