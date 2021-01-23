// Usando a notação literal

const obj1 = {}
console.log(obj1)

// Objetos em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras

function Produto(nome, preco, desc){
    this.nome = nome

    // Quando você usa o this você joga isso para nível global,
    // por isso aqui apenas nome está sendo usado this

    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 1999.99, 0.22)
 
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario(João, 1700.99, 10)
const f2 = criarFuncionario(Ana, 10000.99, 1)

// Object.create

const filha = Object.create(null)
filha.nome = 'Anne'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{}')