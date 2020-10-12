{ 
    {
         {
              {
                   {
                        var sera = 'Será???' 
                        console.log(sera)
                    } 
                } 
            } 
        } 
    }
    console.log(sera)

    //Variavel dentro da funcao é visivel apenas na funcao!
    function teste(){
        var local = 123
        console.log(local)
    }
    teste()
    console.log(local)
    //se o console.log(local) estiver aqui fora o código dara ERRO!
