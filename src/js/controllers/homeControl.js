import { Api } from "../db/api.js"
import { Carrinho } from "../models/carrinho.js"
import {Busca} from "../models/filtro-teste.js"
import { Vitrine } from "../models/vitrine.js";

class HomePageControle {

    static produtoAdicionado = JSON.parse(localStorage.getItem('produtosComprados')); 

    static async adicionarProduto(event){      
        
        const botao = event.target
        const produtos = await Api.produtos()        

        if(botao.id){            
            
            const produto = produtos.find(function(obj){return obj.id == botao.id})
            this.produtoAdicionado.push(produto)
    
            const key = 'produtosComprados'
            localStorage.setItem(key, JSON.stringify(this.produtoAdicionado));
            Carrinho.listarCarrinho(this.produtoAdicionado)
        }

    }

    static async botaoFiltros(event){
        const produtosApi = await Api.produtos()
        const vitrine = document.querySelector('.vitrine')
        const evento = event.target
        

        if(evento.id === "botaoPao" || "botaoFruta" || "botaoBebida"){
            const produtosFiltrados = Busca.filtroCategoria(produtosApi, evento.textContent)
            vitrine.innerHTML = ''
            Vitrine.listarProdutos(produtosFiltrados)
        }

        if(evento.id === "botaoTodos"){
            vitrine.innerHTML = ``
            Vitrine.listarProdutos(produtosApi)
        }

    }

}

export {HomePageControle}