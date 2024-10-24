CREATE TABLE desempenho (
    id_desem INT AUTO_INCREMENT PRIMARY KEY,
    qtd_acertos VARCHAR(100),
    qtd_erros VARCHAR(100),
    id_acertos INT,  
    FOREIGN KEY (id_acertos) REFERENCES acertos(id_acertos),
    id_erros INT,  
    FOREIGN KEY (id_erros) REFERENCES erros(id_erros)
);
