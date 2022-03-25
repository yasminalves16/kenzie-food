import { Api } from "./db/api.js";
import { HomePageControle } from "./controllers/homeControl.js";
//Lembrar de pedir para mudar o nome da classe
import { Busca } from "./models/filtros.js";
import { ProdutosAdmin } from "./models/adminModel.js";
import {AdminControle} from "./controllers/adminControl.js"
import { ModalAdmin } from "./models/adminModel.js";

const token = JSON.parse(localStorage.getItem('auth'))
const meusProdutos = await Api.meusProdutos(token)
ProdutosAdmin.listarProdutos(meusProdutos)

const inputPesquisaAdmin = document.querySelector("#inputPesquisa")
inputPesquisaAdmin.addEventListener('keyup', function(){
    const valuePesquisa = inputPesquisaAdmin.value
    const resultadoPesquisa = Busca.pesquisarProdutos(meusProdutos, valuePesquisa)

    ProdutosAdmin.listarProdutos(resultadoPesquisa)
})

const botao = document.querySelector('.menuFiltroDosProdutos')
botao.addEventListener('click', AdminControle.botaoFiltros)


const botaoAdicionar = document.querySelector("#botaoAdicionar")
botaoAdicionar.addEventListener('click', ModalAdmin.mostrarModalCadastro)

const botaoRemoveModalCadastro = document.querySelector(".fecharModalCad")
botaoRemoveModalCadastro.addEventListener('click',ModalAdmin.removeModal )

const botaoRemoveModalEdit = document.querySelector(".fecharModalEdit")
botaoRemoveModalEdit.addEventListener('click',ModalAdmin.removeModal )

const botaoEditor_Excluir = document.querySelector('#listaApi')
botaoEditor_Excluir.addEventListener('click', ModalAdmin.mostrarModalEditar)

const botaoNaoExcluir = document.querySelector('.botaoModalNaoExcluir')
botaoNaoExcluir.addEventListener('click',ModalAdmin.removeModal )

const formularioAdd = document.querySelector('#infoFormCadastro')
formularioAdd.addEventListener('submit',ModalAdmin.capturarInfosCadastro)

const formularioEdit = document.querySelector("#infoFormEdit")
formularioEdit.addEventListener('submit', ModalAdmin.edicaoDeProduto)

const botaoExcluir = document.querySelector('.botaoModalExcluir')
botaoExcluir.addEventListener('click', ModalAdmin.excluirProduto)

// const BotaoSalvarEdicoes = document.querySelector('.salvarAlterações')
// BotaoSalvarEdicoes.addEventListener('submit',ModalAdmin.edicaoDeProduto )