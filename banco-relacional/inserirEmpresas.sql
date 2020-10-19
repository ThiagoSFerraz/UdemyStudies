INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 30444205000127),
    ('Vale', 57439522000101),
    ('Cielo', 47841850000186);

ALTER TABLE empresas MODIFY cnpj VARCHAR (14);


DESC empresas;
DESC prefeitos;

SELECT * FROM empresas;
SELECT * FROM cidades;


INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES 
    (1, 1, 1),
    (1, 6, 0),
    (2, 1, 0),
    (2, 6, 1);