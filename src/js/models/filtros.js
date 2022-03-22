class Filtros{
    static filtroCategoria(data, value){
        const filtrarCategoria = data.filter((produto) => {
            return produto.categoria === value
        })
        return filtrarCategoria
    }

    static filtroPesquisa(data, value){
        const filtrarPesquisa = data.find(element => element.includes(value))
        return filtrarPesquisa
    }
}