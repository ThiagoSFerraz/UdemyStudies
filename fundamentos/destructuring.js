// new resource of ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua brabinha',
        numero: 1100
    }
}
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log( n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) //bemHumorada só vem true por conta que foi declarado no destructuring acima!

const { endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep) //CEP vai dar undefined por conta que não foi atribuido o valor.

//agora o exemplo de algo que sempre vai dar errado:

const { conta: {numero, agencia}}
console.log(numero, agencia)

/*O motivo pelo qual isso sempre dara erro é porque não foi declarado "conta" e muito menos numero e agência
que teoricamente estaria ligado a conta*/