const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Thiago',
        idade: 19,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },
    {
        nome: 'Ana',
        idade: 20
    }]
}

carro.proprietario.endereco.numero = 1000
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)