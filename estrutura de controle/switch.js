const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('O Brabo! Você tirou: ' + nota)
            break
        case 8:
        case 7:
            console.log('Muito bem, você tirou: ' + nota)
            break
        case 6:
        case 5:
            console.log('WeirdChamp, da pra se esforçar mais em cara. ' + nota)
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log('Reprovado. ' + nota)
            break
        default:
            console.log('Valor Inválido')
    }
    
}


imprimirResultado(7)

//Note que se você retirar os BREAK vai executar todos
//Exemplo abaixo

const imprimirNota = function (n) {
    switch (Math.floor(n)) {
        case 10: case 9: case 8:
            console.log('Parabéns!')
        case 7: case 6: case 5: case 4:
            console.log('You know you can do better!')
        case 3: case 2: case 1: case 0:
            console.log('Ok, at this point you are just trash!')
        default:
            console.log('Type a Valid number!')
        
    }
}

imprimirNota(10)
imprimirNota(7)
imprimirNota(3)


