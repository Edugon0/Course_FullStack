// Nova coisa sobre let, var e const

//let tem escopo de bloco {... bloco}
//var so tem escopo de função


let nome = 'eduardo'
const verdadeira = true

if(verdadeira){
    let nome = 'luiz'
    //console.log(nome)
    if(verdadeira){
        //let nome = ' Kaue'
        console.log(nome)
    }
}

