const db = require('../config/db');

const Desempenho = {
    create: (qtd_acertos, qtd_erros, id_acertos, id_erros) => {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO desempenho (qtd_acertos, qtd_erros, id_acertos, id_erros) VALUES (?, ?, ?, ?)';
            db.query(sql, [qtd_acertos, qtd_erros, id_acertos, id_erros], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results.insertId);
            });
        });
    },
    
    getAll: () => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM desempenho';
            db.query(sql, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
};

module.exports = Desempenho;
