function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula(`Bem vindo`, 123)
const aula2 = new Aula(`Ate breve!`, 456)

console.log(aula1, aula2)

// Vamos entender aqui como funciona o operador New

function novo (f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}


const aula3 = novo(Aula, `Bem vindo`, 123)
const aula4 = novo(Aula,`Ate breve!`, 456)

console.log(aula4, aula3)