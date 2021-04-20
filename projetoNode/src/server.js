const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const dataBase = require("./db");

const port = 3004;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
    res.send(dataBase.getProdutos());
});

app.get("/produtos/:id", (req, res, next) => {
    res.send(dataBase.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
    const produto = dataBase.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
    });
    res.send(produto);
});

app.put("/produtos/:id", (req, res, next) => {
    const produto = dataBase.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,
    });
    res.send(produto);
});

app.delete("/produtos/:id", (req, res, next) => {
    const produto = dataBase.excluirProduto(req.params.id);
    res.send(produto);
});

app.listen(port, () => {
    console.log(`The server is running in the ${port} port`);
});
