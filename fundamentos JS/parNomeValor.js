// par nome/valor
const saudacao = 'Opa' //contexto léxico 1

console.log(saudacao)
function exec() {
    const saudacao = 'faalaa' //contexto léxico 2
    return saudacao
}
//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua braba',
        numero: 123
    }
}
console.log(cliente)