// class Pessoa {
//     constructor(nome, snome) {
//         this.nome = nome,
//         this.snome = snome
//     }

//     falar() {
//         console.log(`Meu nome é ${this.nome} e meu sobrenome é ${this.snome}`)
//     }
// }

// const p1 = new Pessoa('José', 'Ferraz')
// p1.falar()

// Transformar isso em uma função construtora:

const pessoa = (nome, snome) => {
    return{
        falar: () => console.log(`Meu nome é ${nome} e meu sobrenome é ${snome}`)
    }
}

const p1 = pessoa('José', 'Ferraz')
p1.falar()

// Modo que o professor fez abaixo:

function Pessoa(nome, snome) {
    this.nome = nome,
    this.snome = snome
    
    this.falar = function() {
        console.log(`Meu nome é ${nome} e meu sobrenome é ${snome}`)
    }
}

const p2 = new Pessoa('Thiago', 'Ferraz')
p2.falar()