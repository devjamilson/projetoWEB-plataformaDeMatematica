CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    data_de_nascimento DATE,
    ativo BOOLEAN DEFAULT TRUE
);
