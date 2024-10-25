const db = require('../config/db');

const Area = {
    create: (nome_area) => {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO areas (nome_area) VALUES (?)';
            db.query(sql, [nome_area], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results.insertId);
            });
        });
    },
    
    getAll: () => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM areas';
            db.query(sql, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
};

module.exports = Area;
