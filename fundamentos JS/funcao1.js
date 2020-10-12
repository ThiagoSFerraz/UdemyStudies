// Função é um bloco de código nomeado
/*Uma função pode não receber dados
*Pode não receber parâmetro (ingredientes)
*Pode receber dados de entrada e retornar ou NÃO alguma coisa
*/
function imprimirsoma (a, b) {
    console.log(a + b)
}

imprimirsoma(2, 3)
imprimirsoma(2) //erro de not a number por não ter o B
imprimirsoma(2, 3, 4, 5, 6) //depois do segundo número, excluí o resto!

//funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))