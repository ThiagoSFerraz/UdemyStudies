// function declaration

console.log(soma(5,3))

// Um fato interessante é que como a function foi declarada
// de forma normal (usando function) ela pode ser chamada
// em qualquer local do codigo.
// Isso porque o interpretador do JavaScript carrega todas as
// funções primeiro para depois executar o resto. (mais nos próximos exemplos)

function soma(x, y){
    return x + y
}

// function expression

const sub = function (x, y) {
    return x - y
}

console.log(sub(5, 3))

// Aqui por exemplo, se a função que estava dentro de uma constante,
// fosse chamada antes de sua declaração no código, haveria um erro
// dizendo que não foi declarado a função sub!


// function expression nomeada


const mult = function  mult(x,y) {
    return x * y
}


// Vale dizer que mesmo em uma função expression nomeada, não é possível
// chama-la antes que ela tenha sido declarada, pois está dentro
// de uma constante / variavel.

