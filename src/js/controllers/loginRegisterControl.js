import { LoginCadastrar } from "./../models/loginRegisterModel.js"

export class LoginCadastro {

    static async capturarValue(event) {

        event.preventDefault()
        const data = {}
        const inputs = event.target
      

        for (let i = 0; i < inputs.length; i++) {

            const { name, value } = inputs[i]

            if (name) {
               data[name] = value
            }

            inputs[i].value = ""
        }
        if(inputs.length === 3){
        const respota = await LoginCadastrar.login(data)        
        console.log('login')
        }
        if(inputs.length == 4){
        const resp = await LoginCadastrar.cadastrar(data)
        console.log('cadastrar')
        }
    }

    

}