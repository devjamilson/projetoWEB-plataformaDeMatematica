const db = require('../config/db');

const Estudante = {
    findAll: (callback) => {
        db.query('SELECT * FROM estudante', callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO estudante (nome, email, passaword, id_desem) VALUES (?, ?, ?, ?)', [data.nome, data.email, data.passaword, data.id_desem], callback);
    },
    // Adicione outros métodos conforme necessário
};

module.exports = Estudante;
