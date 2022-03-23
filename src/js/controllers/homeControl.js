import { Api } from "../db/api.js"
import {Carrinho} from "../models/carrinho.js"
import {Busca} from "../models/filtro-teste.js"
import {Vitrine} from "../models/vitrine.js";


class HomePageControle {

    static produtoAdicionado = JSON.parse(localStorage.getItem('produtosComprados')) === null ? [] :  JSON.parse(localStorage.getItem('produtosComprados')) 
    

    static async adicionarProduto(event){     

        const botao = event.target
       
        const produtos = await Vitrine.analisarQualListar()
               

        if(botao.id){            
            
            const produto = produtos.find(function(obj){return obj.id == botao.id})
            this.produtoAdicionado.push(produto)
    
            const key = 'produtosComprados'
            localStorage.setItem(key, JSON.stringify(this.produtoAdicionado));
            Carrinho.listarCarrinho(this.produtoAdicionado)

            Carrinho.templateQuantidadePreco()

            Carrinho.quantidadeTotal(this.produtoAdicionado)
            Carrinho.valorTotal(this.produtoAdicionado)
        }

    }

    static removerProduto(event){
        const botao = event.target

        if(botao.id){

            const produto = this.produtoAdicionado.find(function(obj){return obj.id == botao.id})
            
            const index = this.produtoAdicionado.indexOf(produto)

            this.produtoAdicionado.splice(index, 1)
    
            const key = 'produtosComprados'
            localStorage.setItem(key, JSON.stringify(this.produtoAdicionado));
            Carrinho.listarCarrinho(this.produtoAdicionado)
            
            Carrinho.quantidadeTotal(this.produtoAdicionado)
            Carrinho.valorTotal(this.produtoAdicionado)

            Carrinho.templateRemoverProduto()

        }

    }

    static async botaoFiltros(event){
        const produtosApi =  await Vitrine.analisarQualListar()
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

    static logarRegistrarAdmin(event){
        const button = event.target
        if(button.id == 'botaoLogin'){
            window.location.href = './../../src/html/login.html'
            localStorage.clear()
        }
        if(button.id == 'adminPage'){
            window.location.href = './../../src/html/admin.html'
        }
        
    }

    static formatarMoedaProdutos(number){
        return Number(number).toLocaleString("pt-br", {
            style: 'currency', currency: 'BRL'
        })
    }
    
}

export {HomePageControle}