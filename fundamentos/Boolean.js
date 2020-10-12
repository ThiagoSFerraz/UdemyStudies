let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!'') //String vazia
//console.log(!!null) tambem eh falso, mas o negocio nao me deixa executar!
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' lero lero ' || 1))

let nome = '' //se tiver sem nada = Desconhecido, se nao, o nome aparece!
console.log(nome || 'Desconhecido')