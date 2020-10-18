SELECT
    regiao AS 'Região',
    SUM(populacao) AS Total
FROM estados
GROUP BY regiao
ORDER BY Total DESC;

--SE NÃO FOSSE POR REGIÃO SERIA

SELECT
    SUM(populacao) AS Total
FROM estados;

--SE EU QUISER TIRAR A MÉDIA DO LOCAL

SELECT
    AVG(populacao) AS Total
FROM estados;
