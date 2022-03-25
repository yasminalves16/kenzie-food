class Admin{

    static urlAdmin = 'https://kenzie-food-api.herokuapp.com'

    static async adicionarProduto(dados,token ){
        const response = await fetch(`${this.urlAdmin}/my/products`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            'body': JSON.stringify(dados)

        })
        const responseData = await response.json()
        return responseData
    }

    static async editarProduto(dados, token, id){
        const response = await fetch(`${this.urlAdmin}/my/products/${id}`, {
            'method': 'PATCH',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            'body': JSON.stringify(dados)

        })
        const responseData = await response.json()
        return responseData


    }

    static async deletarProduto(token, id){
        const response = await fetch(`${this.urlAdmin}/my/products/${id}`, {
            'method': 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },           

        })
        const responseData = await response.json()
        return responseData

    }

}


export {Admin}

