const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre paradigmas funcional e Orientação a Objetos

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()