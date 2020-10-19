SELECT * FROM cidades;
SELECT * FROM prefeitos;

SELECT * FROM cidades c INNER JOIN prefeitos p ON c.id = p.cidade_id;

SELECT * FROM cidades c LEFT JOIN prefeitos p ON c.id = p.cidade_id;

SELECT * FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;

-- SELECT * FROM CIDADES C FULL JOIN  NÃO EXISTE, MAS PRA FAZER UMA "GAMBIARRA
-- PODE SER FEITO :

SELECT * FROM cidades c LEFT JOIN prefeitos p ON c.id = p.cidade_id
UNION
SELECT * FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;