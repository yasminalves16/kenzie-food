import {Api}  from "../db/api.js";
import {Busca} from "../models/filtro-teste.js";
import { ProdutosAdmin } from "../models/adminModel.js";


class AdminControle{
    static async botaoFiltros(event){
        const meusProdutosApi = await Api.meusProdutos()
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