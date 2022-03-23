import {Api} from "./db/api.js"
import {Vitrine} from "./models/vitrine.js"
import {Busca} from "./models/filtro-teste.js"
import {HomePageControle} from "./controllers/homeControl.js"

const produtosApi = await Api.produtos()

Vitrine.listarProdutos(produtosApi)

const inputPesquisa = document.querySelector('#inputPesquisa')

inputPesquisa.addEventListener('keyup', function(){
    const valuePesquisa = inputPesquisa.value
    const resultadoPesquisa = Busca.pesquisarProdutos(produtosApi, valuePesquisa)

    Vitrine.listarProdutos(resultadoPesquisa)
})

const botaoAdicionarCarrinho = document.querySelector('.vitrine')
botaoAdicionarCarrinho.addEventListener('click', HomePageControle.adicionarProduto.bind(HomePageControle))