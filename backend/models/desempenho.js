const db = require('../config/db');

const Desempenho = {
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
    insertDesempenho: (qtd_acertos, qtd_erros) => { // Removendo id_acertos e id_erros
        return new Promise((resolve, reject) => {
            // Inserindo valores fixos de id_acertos e id_erros
            const sql = 'INSERT INTO desempenho (qtd_acertos, qtd_erros, id_acertos, id_erros) VALUES (?, ?, 1, 1)';
            db.query(sql, [qtd_acertos, qtd_erros], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
};

module.exports = Desempenho;
