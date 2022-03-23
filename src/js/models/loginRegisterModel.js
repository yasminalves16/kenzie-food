class LoginCadastrar {
    static urlLogin = 'https://kenzie-food-api.herokuapp.com'

    static async login(dados) {
        const response = await fetch(`${this.urlLogin}/auth/login`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(dados)

        })
        const responseData = await response.json()
        

        if (responseData.error) {
            
            // const login = document.querySelector('.invalidLogin')

            // setTimeout(() => {login.style.display = 'inline'},0)
            // setTimeout(() => {login.style.display = 'none'},3000)           
        }
        else {
            let key = 'auth'
            localStorage.setItem(key, JSON.stringify(responseData));
            window.location.href = '/./../index.html'        
        }
    }

    static async cadastrar(dados) {
        const response = await fetch(`${this.urlLogin}/auth/register`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify(dados)
        })
            .then((response) => response)
            .catch((error) => console.log(error))

            
        if (response.ok == true) {
            window.location.href = './../../src/html/login.html'
            
        }

        else {
            // const login = document.querySelector('.invalidCadastro')

            // setTimeout(() => {login.style.display = 'inline'},0)
            // setTimeout(() => {login.style.display = 'none'},3000)

        }
    }
}

export {LoginCadastrar}

