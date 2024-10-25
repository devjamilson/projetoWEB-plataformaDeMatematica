CREATE TABLE acertos (
    id_acertos INT AUTO_INCREMENT PRIMARY KEY,

    id_exercicio INT,  
    FOREIGN KEY (id_exercicio) REFERENCES exercicios(id_exercicio),

    id_area INT,  
    FOREIGN KEY (id_area) REFERENCES areas (id_area)
);
