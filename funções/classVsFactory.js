class Pessoa {
    constructor(nome, snome) {
        this.nome = nome,
        this.snome = snome
    }

    falar() {
        console.log(`Meu nome é ${this.nome} e meu sobrenome é ${this.snome}`)
    }
}

const p1 = new Pessoa('José', 'Ferraz')
p1.falar()


const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('José')
p2.falar()