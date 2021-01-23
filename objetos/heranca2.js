// cadeia de protótiposd (prototype chain)

const avo = { attr1: 'A'}
// avo recebe atributo a
const pai = {__proto__: avo, attr2: 'B'}
// pai recebe atributo b
const filho = {__proto__:pai, attr3: 'C'}
// filho recebe atributo c

console.log(filho.attr1, filho.attr3, filho.attr2)

// Como podemos ver, quando especificado o atributo 1 "attr1"
// no objeto filho, como não existe, procuto em pai, que é
// o prototype de filho, e como não acha, procura em avô
// em seguida temos o "attr3" (terceiro atributo) que
// pertence ao filho, logo, não precisa procurar em seu pai ou avo
// por último temos "attr2", que é localizado no pai. 

console.log(filho.attr0)

// Dara undefined por conta que nem no pai, nem no avô é achado
// o atributo 0

Object.prototype.attr0 = 'D' // EVITE USAR ISSO!!!!!
console.log(filho. attr0)

// Agora é possível achar o resultado, pois foi passado em object
// prototype que attr0 é = 'D' e como o avô aponta para prototype
// o atributo é localizado.

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing 
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(120)
console.log(volvo.status())

ferrari.acelerarMais(320)
console.log(ferrari.status())