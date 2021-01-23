// pessoa -> 123 -> {...}

const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> caminho diferente -> {...}
// pessoa = {nome: 'Marcus'}

// Por que um da certo e outro não? Por que consigo alterar uma constante?
// Isso acontece pois no primeiro exemplo, oque está sendo alterado
// é o conteúdo dentro do objeto, no caso 'nome', entretanto,
// no segundo exemplo comentado acima a tentativa foi de mudar
// o objeto como um todo que está localizado dentro de uma constante

// Para que isso dê certo, é necessário usar o tipo abaixo:

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({
    nome: 'Priscila',
})

console.log(pessoaConstante)
