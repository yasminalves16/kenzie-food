import {Api}  from "../db/api.js";
import {Busca} from "../models/filtros.js";
import { ProdutosAdmin } from "../models/adminModel.js";


class AdminControle{
    static async botaoFiltros(event){
        const token = JSON.parse(localStorage.getItem('auth'))
        const meusProdutosApi = await Api.meusProdutos(token)
        const vitrine = document.querySelector('#listaApi')
        const evento = event.target                          
           


        if(evento.id === "botaoPao" || "botaoFruta" || "botaoBebida"){
            const produtosFiltrados = Busca.filtroCategoria(meusProdutosApi, evento.textContent)
            vitrine.innerHTML = ''
            ProdutosAdmin.listarProdutos(produtosFiltrados)
        }

        if(evento.id === "botaoTodos"){
            vitrine.innerHTML = ``
            ProdutosAdmin.listarProdutos(meusProdutosApi)
        }

    }
}

export {AdminControle}