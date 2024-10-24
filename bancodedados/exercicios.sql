CREATE TABLE exercicios (
    id_exercicio INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(250) NOT NULL,
    a VARCHAR(10) NOT NULL,
    b VARCHAR(10) NOT NULL,
    c VARCHAR(10) NOT NULL,
    d VARCHAR(10) NOT NULL,
    e VARCHAR(10) NOT NULL,
    certa VARCHAR(10) NOT NULL,
    id_area INT, 
    FOREIGN KEY (id_area) REFERENCES areas(id_area)
);
