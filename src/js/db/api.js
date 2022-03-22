class Api{
    static url = 'https://kenzie-food-api.herokuapp.com/products'

    static produtos(){
    const response = await fetch(`${this.url}`, {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json',
            
        },
    })

    const responseData = await response.json()

    return responseData
}

}