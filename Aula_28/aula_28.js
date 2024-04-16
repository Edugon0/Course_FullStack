// SWITCH / CASE

const data = new Date()

const diaSemana = data.getDay()

// usando o dia da semana com condição
if (diaSemana === 0){
    console.log('Hoje é domingo')
} else if (diaSemana === 1){
    console.log('Hoje é segunda')
} else if (diaSemana === 2){
    console.log('Hoje é terça')
} else if (diaSemana === 3){
    console.log('Hoje é quarta')
} else if (diaSemana === 4){
    console.log('Hoje é quinta')
} else if (diaSemana === 5){
    console.log('Hoje é sexta')
}else if (diaSemana === 7){
    console.log('Hoje é sabado')
}


// Usa a switch pra buscar o valor da variavel.
//
switch(diaSemana){
    case 0:
        console.log('Hoje é domingo');
        break;
    case 1:
        console.log('Hoje é segunda');
        break;
    case 2 :
        console.log('Hoje é terça');
        break;
    case 3 :
         console.log('Hoje é quarta');
         break;
    case 4:
        console.log('Hoje é quinta');
        break;
    case 5:
        console.log('Hoje é sexta');
        break;
    case 6:
        console.log('Hoje é sabado')
        break;
    default:
        console.log('Valora está errado') // caso nenhuma dessas informaçõs aparecer, terá um saida padrão que pode ser colocado
}

