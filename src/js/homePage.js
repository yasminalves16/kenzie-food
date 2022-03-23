import {Api} from "./db/api.js"
import {Vitrine} from "./models/vitrine.js"
import {Busca} from "./models/filtro-teste.js"
import {HomePageControle} from "./controllers/homeControl.js"
import { Carrinho } from "./models/carrinho.js"

const api = await Vitrine.analisarQualListar()
Vitrine.listarProdutos(api)
Carrinho.listarCarrinho(HomePageControle.produtoAdicionado)

const inputPesquisa = document.querySelector('#inputPesquisa')

inputPesquisa.addEventListener('keyup', function(){
    const valuePesquisa = inputPesquisa.value
    const resultadoPesquisa = Busca.pesquisarProdutos(produtosApi, valuePesquisa)

    Vitrine.listarProdutos(resultadoPesquisa)
})

const botaoAdicionarCarrinho = document.querySelector('.vitrine')
botaoAdicionarCarrinho.addEventListener('click', HomePageControle.adicionarProduto.bind(HomePageControle))

const botao = document.querySelector('.menu')
botao.addEventListener('click', HomePageControle.botaoFiltros)

