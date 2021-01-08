require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) //com o Freeze fica 'sistema legal' sem o freeze 'Eita!'