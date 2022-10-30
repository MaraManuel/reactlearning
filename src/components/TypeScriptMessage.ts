type User = {

    nome: string
    email: string
    adress:{
        city: string
        state: string
    }


}

export default function showMessage(user: User){
    return `Welcome, ${user.nome}! Your email is ${user.email}, and your city is ${user.adress.city} and the state is ${user.adress.state} .`

}
