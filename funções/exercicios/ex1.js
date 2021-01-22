function calculadora(x, y){
    this.x = x,
    this.y = y

    this.soma = function() {
        return console.log(x + y)
    }
    
    this.sub = () => console.log(x - y)
    
    this.mult = () => console.log(x * y)

    this.div = () => console.log(x / y)
        
    
}

const calc = new calculadora(10, 5)
calc.soma()
calc.mult()
calc.div()
calc.sub()