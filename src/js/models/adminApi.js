

class NovoProduto {
    constructor({ nome, preco, categoria, descricao }) {
        this._id = NovoProduto.gerarId()
        this._nome = nome
        this._preco = preco
        this._categoria = categoria
        this._descricao = descricao

        

    }

    static gerarId() {

        let maxId = 0
        DataBase.forEach((clientes) => {
            if (clientes.id > maxId) {
                maxId = clientes.id
            }
        })

        return maxId + 1
    }
}

