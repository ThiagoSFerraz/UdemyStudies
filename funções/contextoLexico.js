const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()


// O contexto lexico é muito importante
// pois aqui, por exemplo, mesmo o local sendo colocado em uma
// constante dentro da funcao exec, quando é chamado a funcao
// minhaFuncao() e minhaFuncao() havia sido declarada antes
// o contexto léxico leva em consideração o local em que essa
// funcao foi declarada.