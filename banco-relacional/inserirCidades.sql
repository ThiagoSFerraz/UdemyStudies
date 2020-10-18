SELECT * FROM estados

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 36)

INSERT INTO cidades (nome, area, estado_id)
VALUES (
    'Juazeiro do Norte',
    248.2,
    (SELECT id FROM estados WHERE sigla = 'CE')
)