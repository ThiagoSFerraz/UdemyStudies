// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: `Qualquer`,
    preco: 1.99,
    tag: `promocao`
})
console.log(`extensivel:`, Object.isExtensible(produto))

produto.nome = `Borracha`
produto.descricao = `Borracha escolar Branca`
// Descricao nao sera adicionado pois nao tem o atributo
// descricao!

delete produto.tag
console.log(produto)

// Object Seal (selamento de objeto)
// nao consegue adicionar ou excluir objeto ja existente
// entretanto, voce consegue mexer com os atributos que ja existem

const pessoa = {
    nome: `Juliana`,
    idade: 25
}
Object.seal(pessoa)
console.log(`Selado:`, Object.isSealed(pessoa))

pessoa.sobrenome = `Silva`
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// A diferenca do Seal para o freeze, eh que o freeze
// a alteracao de dados tambem nao eh possivel pois
// o objeto vira uma constante!