const escola = "lero lero"

console.log(escola.charAt(3))
console.log(escola.charAt(4)) //Quando o caractere nao existe o console nao registra.
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola ' .concat(escola).concat("!"))
console.log(escola.replace('e', 'J'))

console.log('Ana, Maria, Pedro. ' .split(','))
