const ferrari = { 
    modelo: 'F40',
    velMax: 320
}

const volvo = {
    modelo: 'V40',
    velMax: 320
}

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)