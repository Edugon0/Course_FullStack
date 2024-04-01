// if, else if, else 


//IF
function UsandoIF(){
    const dia = 12
    if (dia <= 12){
        return('Bom Dia')
    } 
}

//Else
function UsandoElse(){
    const tarde = 13
    if (tarde > 12){
    return 'Boa Tarde'
    }else{
    return 'Bom dia'
}
}

//ELSE IF

function UsandoElseIF(){
    const boanoite = 15
    if(boanoite>= 18){
        return "Boa Noite"
    } else if(boanoite<= 18){
        return "Boa Tarde"
    }
}

//entre 0 - 11 (BOM DIA)
//entre 12 - 17 (BOA TARDE)
//entre 18 - 23 (BOA NOITE)

function cumprimentar(){
    const QueHoraSao = 59
    if(QueHoraSao >= 0 && QueHoraSao<= 11){
        return "BOM DIA"
}else if(QueHoraSao >= 12 && QueHoraSao<=17){
    return "BOA TARDE"
}else if(QueHoraSao>= 18 && QueHoraSao <=23){
    return "BOA NOITE"
}
}

console.log(cumprimentar())