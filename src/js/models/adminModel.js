import {Admin} from './adminApiAED.js'

const ModalAdmin = class ModalAdmin {

    // static token = JSON.parse(localStorage.getItem('auth'))
    // static meusProdutos = await Api.meusProdutos(token)

    static mostrarModalCadastro(evento) {
        console.log(evento.target)
        const modalDeCadastro = document.querySelector("#formCadastroDeProdutos")
        modalDeCadastro.classList.remove("hidden")


    }

    static mostrarModalEditar(evento) {
        console.dir(evento.target)
        console.log(evento.target.id)
        
        const botao = evento.target 
        if(botao.className == "botaoEditarItemListaAdmin"){
            
            const modalDeEdit = document.querySelector("#formEditarProdutos")
            modalDeEdit.classList.remove("hidden")
            const idProduto = botao.id
            const botaoEditar = document.querySelector('.salvarAlterações')
            botaoEditar.id = idProduto 
        }
        if(botao.className == "botaoExcluirItemListaAdmin"){
            const modalDeExcluir = document.querySelector("#modalExcluir")
        modalDeExcluir.classList.remove("hidden")
        }

    }

    static removeModal(evento) {
        console.log(evento)
        evento.preventDefault()
        const modalDeCadastro = document.querySelector("#formCadastroDeProdutos")
        const modalDeEdit = document.querySelector("#formEditarProdutos")
        const modalDeExcluir = document.querySelector("#modalExcluir")
        const modalCertezaQuerExcluir = document.querySelector(".modalExcluir")
        modalDeCadastro.classList.add("hidden")
        modalDeEdit.classList.add("hidden")
        modalDeExcluir.classList.add("hidden")
        // modalCertezaQuerExcluir.classList.add("hidden")
        console.log(modalCertezaQuerExcluir)
        
        
        ProdutosAdmin.listarProdutos()


    }
    

    static async capturarInfosCadastro(evento) {
        evento.preventDefault()
        console.log(evento.target)
        
    const token = JSON.parse(localStorage.getItem('auth'))
    const objetoCadastro = {}
    for (let i = 0; i < infoFormCadastro.length; i++) {

        objetoCadastro[infoFormCadastro[i].name] = infoFormCadastro[i].value
        console.log(infoFormCadastro[i].value)
    }
    console.log(objetoCadastro)
    Admin.adicionarProduto(objetoCadastro,token)
        
    }

    
    static async edicaoDeProduto(evento){
        evento.preventDefault()
        console.log(evento)
        console.log(evento.target)
        const token = JSON.parse(localStorage.getItem('auth'))
        const botao = document.querySelector('.salvarAlterações')
        const id = botao.id 

        const objetoEditado = {}
        for(let i = 0; i < infoFormEdit.length; i++) {

            objetoEditado[infoFormEdit[i].name] = infoFormEdit[i].value
            console.log(infoFormEdit[i].value)
        }

        
        const resposta = await Admin.editarProduto(objetoEditado,token,id)
        console.log(resposta)
        console.log(objetoEditado)
        
    }

    

}





class ProdutosAdmin {

    static async listarProdutos(data) {
        const ul = document.querySelector('#listaApi')
        ul.innerHTML = ''
        data.forEach((produto) => {


            const template = this.vitrineAdmin(produto)

            ul.appendChild(template)
        })


    }

    static vitrineAdmin({id, imagem, nome, categoria, descricao}) {


        const li = document.createElement('li')

        li.innerHTML = `
        <div class="fotoNomeProduto">
        <img src="${imagem}" class="imgIconListaAdmin"> 
        <h4 class="infosListaAdmin" class="nomeProdutoListaAdmin">${nome}</h4>
        </div>
        <span class="infosListaAdmin" class="categoriasListaAdmin">${categoria}</span> 
        <span class="infosListaAdmin" class="descricaoListaAdmin">${descricao}</span>
        <div> 
        <button class="botaoEditarItemListaAdmin" id="${id}"><img src="" class="imgBotaoListaAdmin"></button>
        <button class="botaoExcluirItemListaAdmin" id="${id}"><img src="" class="imgBotaoListaAdmin"></button>
        </div>
        `

        li.className = 'listaProduto'
        return li 



        // buttonEdit.addEventListener('click', ModalAdmin.mostrarModalEditar)
        // buttonExcluir.addEventListener('click', ModalAdmin.mostrarModalExcluir)


    }

    
}








/*const botaoAdicionar = document.querySelector("#botaoAdicionar")
botaoAdicionar.addEventListener('click', ModalAdmin.mostrarModalCadastro)


// const botaoRemoveModalCadastro = document.querySelector(".fecharModalCad")
// botaoRemoveModalCadastro.addEventListener('click', ModalAdmin.removeModal)

// const botaoRemoveModalEdit = document.querySelector(".fecharModalEdit")
// botaoRemoveModalEdit.addEventListener('click', ModalAdmin.removeModal)

// const botaoRemoveModalExcluir = document.querySelector(".fecharModalExcluir")
// botaoRemoveModalExcluir.addEventListener('click', ModalAdmin.removeModal)

// const botaoCancelaExcluir = document.querySelector(".botaoCancelaExcluir")
// botaoCancelaExcluir.addEventListener('click', ModalAdmin.removeModal)


const botaoDeCadastro = document.querySelector(".formAdminCadastro")
const formularioCadastro = document.querySelector(".infosFormCadastro")
formularioCadastro.addEventListener('submit', ModalAdmin.capturarInfosCadastro)*/




export { ProdutosAdmin }
export { ModalAdmin }


