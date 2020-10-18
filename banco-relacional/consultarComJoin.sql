SELECT * FROM estados est, cidades cid
WHERE est.id = cid.estado_id;

SELECT 
	est.nome AS Estado,
	cid.nome AS Cidade,
    regiao AS Região
FROM estados est, cidades cid
WHERE est.id = cid.estado_id;

SELECT
    cid.nome AS Cidade,
    est.nome AS Estado,
    regiao AS Região
FROM estados est
INNER JOIN cidades cid
    ON est.id = cid.estado_id