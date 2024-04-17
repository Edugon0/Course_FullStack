// Atribuição via desestruturação (Objetos)

const Register_user = {
    nome: 'Eduardo',
    sobrenome: 'Gonçalves',
    idade: 20,
    endereco:{
        rua: 'Av. Joao Paulo II',
        numero: 320
    }
}


// Assim que funcionar a desestruturação via atribuição
const { nome, endereco: {rua, numero} } = Register_user
console.log(nome, rua, numero)