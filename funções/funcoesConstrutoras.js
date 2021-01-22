function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo público
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Mais um metodo público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const corsaRebaixado = new Carro
corsaRebaixado.acelerar()
console.log(corsaRebaixado.getVelocidadeAtual())

const nissan2001 = new Carro (350, 20)
nissan2001.acelerar()
nissan2001.acelerar()
nissan2001.acelerar()
console.log(nissan2001.getVelocidadeAtual())


console.log(typeof Carro)
console.log(typeof nissan2001)