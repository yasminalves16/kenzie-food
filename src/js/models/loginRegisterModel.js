 export class LoginCadastro {

    static capturarValue(event) {

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
        console.log(data)
    }

}

