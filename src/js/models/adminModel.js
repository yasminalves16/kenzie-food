const ModalAdmin = class ModalAdmin {

    static mostrarModalCadastro(evento) {
        console.log(evento.target)
        const modalDeCadastro = document.querySelector("#formCadastroDeProdutos")
        modalDeCadastro.classList.remove("hidden")


    }

    static mostrarModalEditar(evento) {
        console.log(evento.target)
        const modalDeEdit = document.querySelector("#formEditarProdutos")
        modalDeEdit.classList.remove("hidden")


    }

    static mostrarModalExcluir(evento) {
        console.log(evento.target)
        const modalDeExcluir = document.querySelector("#containerModalExcluir")
        modalDeExcluir.classList.remove("hidden")
    }

    static removeModal(evento) {
        console.log(evento)
        evento.preventDefault()
        const modalDeCadastro = document.querySelector("#formCadastroDeProdutos")
        const modalDeEdit = document.querySelector("#formEditarProdutos")
        const modalDeExcluir = document.querySelector("#containerModalExcluir")
        const botaoCancelaExcluir = document.querySelector(".botaoCancelaExcluir")
        const botaoCancelaExcluirModal = botaoCancelaExcluir.parentNode.parentNode
        modalDeCadastro.classList.add("hidden")
        modalDeEdit.classList.add("hidden")
        modalDeExcluir.classList.add("hidden")
        botaoCancelaExcluirModal.classList.add("hidden")




    }

    static capturarInfosCadastro(evento) {
        evento.preventDefault()
        const itemCadastro = {}
        console.log(evento)
        console.log(evento.target)
        console.log(evento.value)
        
        for (let i = 0; i < formularioCadastro.legnth; i++) {
            console.log(formularioCadastro[i])
        }


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
        <img src="${imagem}" class="imgIconListaAdmin"> 
        <h4 class="infosListaAdmin" class="nomeProdutoListaAdmin">${nome}</h4> 
        <span class="infosListaAdmin" class="categoriasListaAdmin">${categoria}</h4> 
        <span class="infosListaAdmin" class="descricaoListaAdmin">${descricao}</span> 
        <button class="botaoEditarItemListaAdmin ${id}"><img src="" class="imgBotaoListaAdmin"></button>
        <button class="botaoExcluirItemListaAdmin ${id}"><img src="" class="imgBotaoListaAdmin"></button>
        `

        return li

        //buttonEdit.addEventListener('click', ModalAdmin.mostrarModalEditar)
        //buttonExcluir.addEventListener('click', ModalAdmin.mostrarModalExcluir)

    }
}




/*const botaoAdicionar = document.querySelector("#botaoAdicionar")
botaoAdicionar.addEventListener('click', ModalAdmin.mostrarModalCadastro)

const botaoRemoveModalCadastro = document.querySelector(".fecharModalCad")
botaoRemoveModalCadastro.addEventListener('click', ModalAdmin.removeModal)

const botaoRemoveModalEdit = document.querySelector(".fecharModalEdit")
botaoRemoveModalEdit.addEventListener('click', ModalAdmin.removeModal)

const botaoRemoveModalExcluir = document.querySelector(".fecharModalExcluir")
botaoRemoveModalExcluir.addEventListener('click', ModalAdmin.removeModal)

const botaoCancelaExcluir = document.querySelector(".botaoCancelaExcluir")
botaoCancelaExcluir.addEventListener('click', ModalAdmin.removeModal)

const botaoDeCadastro = document.querySelector(".formAdminCadastro")
const formularioCadastro = document.querySelector(".infosFormCadastro")
formularioCadastro.addEventListener('submit', ModalAdmin.capturarInfosCadastro)*/



export { ProdutosAdmin }
export { ModalAdmin }


