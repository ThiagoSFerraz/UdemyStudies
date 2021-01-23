const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: true,
    value: '01/02/2010'
})

pessoa.dataNascimento = '01/01/2007'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)

const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a:4 }
const obj = Object.assign(dest, o1, o2)

// Em resumo, concatena os objetos
// o "dest" é o destino, sempre colocado em primeiro na order
// os seguintes, são os que serão concatenados.
// Se tiver a mesmo atributo / método nos que concatenam
// tal atributo é substituido pelo novo.
// como por exemplo "a:1" virou "a:4"

console.log(obj)

