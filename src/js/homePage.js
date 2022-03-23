import {Vitrine} from "./models/vitrine.js"
import {Busca} from "./models/filtro-teste.js"
import {HomePageControle} from "./controllers/homeControl.js"
import {Carrinho} from "./models/carrinho.js"

const api = await Vitrine.analisarQualListar()
Vitrine.listarProdutos(api)
Carrinho.listarCarrinho(HomePageControle.produtoAdicionado)
Vitrine.checarSeLoginExiste()

const inputPesquisa = document.querySelector('#inputPesquisa')

inputPesquisa.addEventListener('keyup', function(){
    const valuePesquisa = inputPesquisa.value
    const resultadoPesquisa = Busca.pesquisarProdutos(api, valuePesquisa)

    Vitrine.listarProdutos(resultadoPesquisa)
})

const botaoAdicionarCarrinho = document.querySelector('.vitrine')
botaoAdicionarCarrinho.addEventListener('click', HomePageControle.adicionarProduto.bind(HomePageControle))

const botaoMenu = document.querySelector('.menu')
botaoMenu.addEventListener('click', HomePageControle.botaoFiltros)

const header = document.querySelector('.topo')
header.addEventListener('click',HomePageControle.logarRegistrarAdmin.bind(HomePageControle))

const botaoRemoverProduto = document.querySelector('.ulCarrinho')
botaoRemoverProduto.addEventListener('click', HomePageControle.removerProduto.bind(HomePageControle))