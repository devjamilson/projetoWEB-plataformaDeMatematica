CREATE TABLE estudante (
    id_estudante INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    passaword VARCHAR(100) NOT NULL,
    id_desem INT,  
    FOREIGN KEY (id_desem) REFERENCES desempenho(id_desem)
);
