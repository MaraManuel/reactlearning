type User = {

    nome: string
    email: string
    adress:{
        city: string
        state: string
    }


}

function showMessage(user: User){
    return `Welcome, ${user.nome}! Your emaile is ${user.email}, and your city is ${user.adress.city} and the state is ${user.adress.state} .`

}
