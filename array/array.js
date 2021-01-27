console.log(typeof Array, typeof new Array, typeof [])

// Array eh um objeto especial em JS

// Boa pratica nao ter um array com muitas misturas!!!
// como por exemplo nao misturar objeto, boolean, float number etc

let aprovados = new Array(`Bia`, `Carlos`, `Ana`)
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])


// Esse metodo eh melhor para mudar itens ja existentes!!!
aprovados [3] = `Paulo`


// o mais apropriado para adicionar eh o push!!
aprovados.push(`Mike, o mike.`)


console.log(aprovados.length)
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Lero1', 'Lero2')
console.log(aprovados)

