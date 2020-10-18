SELECT * FROM WM.estados;

SELECT sigla, nome AS 'Nome do estado' FROM estados
WHERE regiao = 'Nordeste';

SELECT nome, regiao, populacao  FROM estados
WHERE populacao >= 10
ORDER BY populacao DESC;

SELECT nome, regiao, populacao FROM estados
WHERE populacao >= 4
ORDER BY populacao ASC;