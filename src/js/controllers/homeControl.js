import { Api } from "../db/api.js"
import {Carrinho} from './../models/carrinho.js'

class HomePageControle {

    static produtoAdicionado = JSON.parse(localStorage.getItem('produtosComprados')) === null ? [] :  JSON.parse(localStorage.getItem('produtosComprados')) 

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
}

export {HomePageControle}