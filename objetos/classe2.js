class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = `professor`){
        super(sobrenome)
        this.profissao = profissao 
    }
}

class Filha extends Pai {
    constructor(){
        super(`Silva`),
        this.profissao = `Dentista`
    }
}

const filha = new Filha
console.log(filha)