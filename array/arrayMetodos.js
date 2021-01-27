const pilotos = ['Vettle', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa vaza!!
// Tira o ultimo elemento da lista, nesse caso o Massa!
console.log(pilotos)


pilotos.push('Verstappen')
// Push adiciona!
console.log(pilotos)


pilotos.shift() 
// remove o primeiro elemento!
console.log(pilotos)

pilotos.unshift('Hamilton')
// Parecido com o Push, a grande diferenca eh que adiciona no
// primeiro indice e nao no ultimo!
console.log(pilotos)


pilotos.splice(0,0, 'Bottas', 'Massa')
// o splice voce pode remover, adicionar e alterar.
// ----------    o primeiro numero    -------------
// 
//  nesse caso o 2 simboliza qual indice voce esta mirando,
//  no nosso caso o hamilton, que eh o primeiro do array [0].
// ----------    o segundo numero    -------------
// 
// esse decide se vai ser exluido algum indice, nesse caso
// nenhum indice eh excluido pois foi passado o numero 0
// veja o resultado abaixo:

console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // cria um novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)