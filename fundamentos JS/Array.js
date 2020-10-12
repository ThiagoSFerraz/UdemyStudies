const valores = [7.7, 8.9, 3.4, 9.1]
console.log(valores[0], valores[3])
console.log(valores[0], valores [4]) //Valores que nao existem ficam como undefined

valores [4] = 10
console.log(valores[4])
console.log(valores.length) //mostra o tanto de elementos que tem no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop)
delete valores[0]
console.log(valores)

console.log(typeof valores)