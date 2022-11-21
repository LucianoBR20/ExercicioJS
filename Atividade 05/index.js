function imparPar(numero){

    if(numero >= 0){
        if(numero % 2 == 0){
            console.log("Par")
        }else{
            console.log("Ímpar")
        }
    }else{
        console.log("Dígite um número positivo")
    }

}

imparPar(3)