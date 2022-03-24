import { Api } from "../db/api.js"
import { Carrinho } from "../models/carrinho.js"
import { Busca } from "../models/filtros.js"
import { Vitrine } from "../models/vitrine.js"
import { ModalCarrinho } from "../models/carrinho.js"


class HomePageControle {

    static produtoAdicionado = JSON.parse(localStorage.getItem('produtosComprados')) === null ? [] : JSON.parse(localStorage.getItem('produtosComprados'))


    static async adicionarProduto(event) {

        const botao = event.target

        const produtos = await Vitrine.analisarQualListar()


        if (botao.id) {
            
            const ulCarrinho = document.querySelector('.ulCarrinho')
            const produto = produtos.find(function (obj) { return obj.id == botao.id })
            this.produtoAdicionado.push(produto)

            const key = 'produtosComprados'
            localStorage.setItem(key, JSON.stringify(this.produtoAdicionado));
            Carrinho.listarCarrinho(this.produtoAdicionado)
            if(ulCarrinho.childElementCount<=1){
                Carrinho.templateQuantidadePreco('aside', '.ulCarrinho', 'quantidadeTotal', 'precoTotal')
            }

            Carrinho.quantidadeTotal(this.produtoAdicionado, 'quantidadeTotal')
            Carrinho.valorTotal(this.produtoAdicionado, 'precoTotal')
        }

    }

    static removerProduto(event) {
        const botao = event.target

        if (botao.id) {

            const produto = this.produtoAdicionado.find(function (obj) { return obj.id == botao.id })

            const index = this.produtoAdicionado.indexOf(produto)

            this.produtoAdicionado.splice(index, 1)

            const key = 'produtosComprados'
            localStorage.setItem(key, JSON.stringify(this.produtoAdicionado));
            Carrinho.listarCarrinho(this.produtoAdicionado)

            Carrinho.quantidadeTotal(this.produtoAdicionado, 'quantidadeTotal')
            Carrinho.valorTotal(this.produtoAdicionado, 'precoTotal')

            Carrinho.templateRemoverProduto('.ulCarrinho')

        }

    }

    static removerProdutoModal(event){

        const botao = event.target

        if (botao.id) {

            const produto = this.produtoAdicionado.find(function (obj) { return obj.id == botao.id })

            const index = this.produtoAdicionado.indexOf(produto)

            this.produtoAdicionado.splice(index, 1)

            const key = 'produtosComprados'
            localStorage.setItem(key, JSON.stringify(this.produtoAdicionado));
            
            Carrinho.listarCarrinho(this.produtoAdicionado)
            Carrinho.listarCarrinhoModal(this.produtoAdicionado)

            Carrinho.quantidadeTotal(this.produtoAdicionado, 'quantidadeTotalModal')
            Carrinho.valorTotal(this.produtoAdicionado, 'precoTotalModal')

            Carrinho.templateRemoverProduto('.ulCarrinho')

        }
    }

    static async botaoFiltros(event) {
        const produtosApi = await Vitrine.analisarQualListar()
        const vitrine = document.querySelector('.vitrine')
        const evento = event.target



        if (evento.id === "botaoPao" || "botaoFruta" || "botaoBebida") {
            const produtosFiltrados = Busca.filtroCategoria(produtosApi, evento.textContent)
            vitrine.innerHTML = ''
            Vitrine.listarProdutos(produtosFiltrados)
        }

        if (evento.id === "botaoTodos") {
            vitrine.innerHTML = ``
            Vitrine.listarProdutos(produtosApi)
        }
    }

    static async logarRegistrarAdmin(event) {
        const button = event.target
        if (button.id == 'botaoLogin') {
            window.location.href = './../../src/html/login.html'
            localStorage.clear()
        }

        if (button.id == 'logout') {
            localStorage.clear()
            const botaoLogout = document.querySelector('#logout')
            botaoLogout.innerHTML = 'Login / Registrar'
            botaoLogout.id = 'botaoLogin'
            const botaoAdmin = document.querySelector('#adminPage')
            botaoAdmin.style.display = 'none'
            const api = await Vitrine.analisarQualListar()
            Vitrine.listarProdutos(api)
            const ulCarrinho = document.querySelector('.div-carrinho')
            this.produtoAdicionado = []
            ulCarrinho.innerHTML = `
            <ul class="ulCarrinho">                        
            </ul>`


        }
        if (button.id == 'adminPage') {
            window.location.href = './../../src/html/admin.html'
        }

    }

    static callbackModalCarrinho(event) {
        const evento = event.target

        if(evento) {

            ModalCarrinho.criarModalCarrinho()

            Carrinho.listarCarrinhoModal(this.produtoAdicionado)

            Carrinho.templateQuantidadePreco('.modal', '#ulModalCarrinho', 'quantidadeTotalModal', 'precoTotalModal')

            Carrinho.quantidadeTotal(this.produtoAdicionado, 'quantidadeTotalModal')
            Carrinho.valorTotal(this.produtoAdicionado, 'precoTotalModal')

            const botaoRemoverProdutoModal = document.querySelector('.divCarrinhoModal')
            botaoRemoverProdutoModal.addEventListener('click', HomePageControle.removerProdutoModal.bind(HomePageControle))
        }

    }

    static formatarMoedaProdutos(number) {
        return Number(number).toLocaleString("pt-br", {
            style: 'currency', currency: 'BRL'
        })
    }


}

export { HomePageControle }