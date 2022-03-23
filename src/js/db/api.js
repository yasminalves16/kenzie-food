class Api {
    static url = 'https://kenzie-food-api.herokuapp.com'

    static async produtos() {
        const response = await fetch(`${this.url}/products`, {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
            },
        })

        const responseData = await response.json()       

        return responseData
    }

    static async meusProdutos(token){
        const response = await fetch(`${this.url}/my/products`, {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        const responseData = await response.json()
        return responseData
    }
}

export {Api}

