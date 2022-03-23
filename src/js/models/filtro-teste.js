class Busca {
    static pesquisarProdutos(data, pesquisa){

        const campoBusca = data.filter((produto) => {

            const {nome, categoria} = produto

            const pesquisaFormatada = pesquisa.toLowerCase()
            const nomeProdutoFormatado = nome.toLowerCase()
            const categoriaProdutoFormatado = categoria.toLowerCase()

            if(nomeProdutoFormatado.includes(pesquisaFormatada) || categoriaProdutoFormatado.includes(pesquisaFormatada)){
                return produto
            }

        })
        
        return campoBusca
    }

    static filtroCategoria(data, value){
        const filtrarCategoria = data.filter((produto) => {
            return produto.categoria == value
        })
        return filtrarCategoria
    }
}

export {Busca}