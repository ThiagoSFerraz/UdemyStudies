//while é focado pra quando você tem uma repetição que tem que acontecer indeterminada vezes.

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 30)
    console.log(`Opção escolhida foi ${opcao}`)
}

console.log("até a próxima!")