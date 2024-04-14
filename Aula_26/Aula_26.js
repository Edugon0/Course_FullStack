// Operação ternária

/* 

-> pode substutir parte do meu codigo, ajuda em diminuir o meu codigo, por exemplo usando as condição IF, ELSE e IF ELSE

-> ela pode ser usado por ? :

-> ? (para valor verdadeiro)  : (para valor falso)
*/

// uma condiação normal
const PointUser = 999

if (PointUser >= 1000){
    console.log('Ele é um usuario VIP')
} else{
    console.log('O seu cargo não consegue acessar')
}

// Usando as operação ternária, em resumo o ? é TRUE e : é FALSE
const LevelUser = PointUser >= 1000 ? 'Seu nivel é VIP' : 'O seu nivel é baixo'
console.log(LevelUser)