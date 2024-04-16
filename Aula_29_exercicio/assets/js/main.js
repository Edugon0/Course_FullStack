/*
const h1 = document.querySelector('.container h1')
const data = new Date()
h1.innerHTML = data.toString()

function getDiaSemanaTexto(diasemana){
    let DiaSemanaTexto
    switch(diasemana){
        case 0:
            DiaSemanaTexto = 'domingo'
            return DiaSemanaTexto
        case 1:
            DiaSemanaTexto = 'segunda-feira'
            return DiaSemanaTexto
        case 2 :
            DiaSemanaTexto = 'terça-feira'
            return DiaSemanaTexto
        case 3 :
            DiaSemanaTexto = 'quarta-feira'
            return DiaSemanaTexto
        case 4:
            DiaSemanaTexto = 'quinta-feira'
            return DiaSemanaTexto
        case 5:
            DiaSemanaTexto = 'sexta-feira'
            return DiaSemanaTexto
        case 6:
            DiaSemanaTexto = 'sabado'
            return DiaSemanaTexto
        default:
            console.log('Valora está errado') // caso nenhuma dessas informaçõs aparecer, terá um saida padrão que pode ser colocado
    }
}

function getDiaMesTexto(Mes){
    let DiaMesTexto
    switch(Mes){
        case 0:
            DiaMesTexto = 'janeiro'
            return DiaMesTexto
        case 1:
            DiaMesTexto = 'fevereiro'
            return DiaMesTexto
        case 2 :
            DiaMesTexto = 'Março'
            return DiaMesTexto
        case 3 :
            DiaMesTexto = 'Abril'
            return DiaMesTexto
        case 4:
            DiaMesTexto = 'Maio'
            return DiaMesTexto
        case 5:
            DiaMesTexto = 'Junho'
            return DiaMesTexto
        case 6:
            DiaMesTexto = 'Julho'
            return DiaMesTexto
        case 7:
            DiaMesTexto = 'Agosto'
            return DiaMesTexto
        case 8:
            DiaMesTexto ='Setembro'
            return DiaMesTexto
        case 9:
            DiaMesTexto = 'Outubro'
            return DiaMesTexto
        case 10:
            DiaMesTexto ='Novembro'
            return DiaMesTexto
        case 11:
            DiaMesTexto= 'Dezembro'
            return DiaMesTexto
        default:
            console.log('Valora está errado') // caso nenhuma dessas informaçõs aparecer, terá um saida padrão que pode ser colocado
    }
}
function CriaData(data){
    const diasemana = data.getDay()
    const mes = data.getMonth()
    const ano = data.getFullYear()
    const hora = data.getHours()
    const minuto = data.getMinutes()
    const nomeDia = getDiaSemanaTexto(diasemana)
    const nomeMes = getDiaMesTexto(mes)

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${ano} as ${hora}:${minuto} `
}

h1.innerHTML = CriaData(data)

*/

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full',});