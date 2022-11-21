const livro = {
    titulo: 'meu novo mundinho',
    autor: 'William Mikhael',
    ano: 2022
}

exibir(livro)

function exibir(obj){

    for(prop in obj){
        if(typeof obj[prop] == 'string'){
            console.log(prop, obj[prop])
        }
    }

}