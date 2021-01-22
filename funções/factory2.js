function criarProduto(nome, preco, desconto){
    const aplicandoDesconto = preco - preco * desconto
    if (desconto === undefined) {
        return {
            nome,
            preco,
            'O preço final é = ': preco
        } 
    } else {
        return {
            nome,
            preco,
            'O preço com o desconto aplicado é = ': aplicandoDesconto
            }
    }
    
        
        
    
}

console.log(criarProduto('notebook', 2300.99, 0.1))
console.log(criarProduto('iPhone 12', 11199.99, 0.2))
console.log(criarProduto('Computador', 5000.99))