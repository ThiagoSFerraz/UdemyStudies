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

imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(8.9)
imprimirResultado(5.5)
imprimirResultado(7.2)
imprimirResultado(10)
imprimirResultado(0)
imprimirResultado(8)
imprimirResultado(9)