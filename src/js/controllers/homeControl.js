class User {
    static apiUrl = 'https://api-blog-m2.herokuapp.com/user'

    static infoUser = {
        autenticacao: {},
        informacoes: {}
    }
   

    static dataCallRegister(event) {
        event.preventDefault()
        
        const inputs = event.target       
        const dataForm = {}

        for (let i = 0; i < inputs.length -1; i++) {
            const { name, value } = inputs[i]
                dataForm[name] = value

            inputs[i].value = ""
        }
       this.registrar('/register', dataForm)       
    }

    static dataCallLogin(event){
        event.preventDefault()
        
        const inputs = event.target       
        const dataForm = {}

        for (let i = 0; i < inputs.length -1; i++) {
            const { name, value } = inputs[i]
                dataForm[name] = value

            inputs[i].value = ""
        }
        this.login('/login',dataForm)

    }    

    static async registrar(path, data) {
       const response = await fetch(`${this.apiUrl}${path}`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify(data)
        })
            .then((response) => response)
            .catch((error) => console.log(error))
            

        if(response.ok == true){
            window.location.href = './src/html/login.html'
        }

        if(response.ok == false){
            const login = document.querySelector('.invalidCadastro')
           
            setTimeout(() => {login.style.display = 'inline'},0)
            setTimeout(() => {login.style.display = 'none'},3000)

        }
    }

    static async login(path, data) {
        const response = await fetch(`${this.apiUrl}${path}`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(data)
        })
        const responseData = await response.json()

        if(responseData.status == 'error'){
            const login = document.querySelector('.invalidLogin')
           
            setTimeout(() => {login.style.display = 'inline'},0)
            setTimeout(() => {login.style.display = 'none'},3000)
        }
        else{
        let key = 'auth'
        localStorage.setItem(key, JSON.stringify(responseData));            
        this.infoUser.autenticacao = { ...responseData }
        const resp = await this.userInfo()
        window.location.href = './../../src/html/blog.html'
        
        }
    }

    static async userInfo() {
        const { autenticacao: { userId, token } } = this.infoUser
        const response = await fetch(`${this.apiUrl}/${userId}`, {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        
        const responseData = await response.json()
        let key = 'info'
        localStorage.setItem(key, JSON.stringify(responseData)); 
        return responseData
        
    }    
   
}

export {User}