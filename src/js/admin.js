import { Api } from "./db/api.js";
import { HomePageControle } from "./controllers/homeControl.js";
//Lembrar de pedir para mudar o nome da classe
import { Busca } from "./models/filtro-teste.js";
import { ProdutosAdmin } from "./models/adminModel.js";
import {AdminControle} from "./controllers/adminControl.js"
import { ModalAdmin } from "./models/adminModel.js";

const meusProdutos = Api.meusProdutos()

const inputPesquisaAdmin = document.querySelector("#inputAdminPesquisarProduto")
inputPesquisaAdmin.addEventListener('keyup', function(){
    const valuePesquisa = inputPesquisaAdmin.value
    const resultadoPesquisa = Busca.pesquisarProdutos(meusProdutos, valuePesquisa)

    ProdutosAdmin.listarProdutos(resultadoPesquisa)
})

const botao = document.querySelector('.divBotoesDeFiltro')
botao.addEventListener('click', AdminControle.botaoFiltros)

ProdutosAdmin.listarProdutos()

const botaoAdicionar = document.querySelector("#botaoAdicionar")
botaoAdicionar.addEventListener('click', ModalAdmin.mostrarModalCadastro)

const botaoRemoveModalCadastro = document.querySelector(".fecharModalCad")
botaoRemoveModalCadastro.addEventListener('click',ModalAdmin.removeModal )

const botaoRemoveModalEdit = document.querySelector(".fecharModalEdit")
botaoRemoveModalEdit.addEventListener('click',ModalAdmin.removeModal )