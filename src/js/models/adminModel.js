const ModalAdmin = class ModalAdmin {

    static mostrarModalCadastro(evento) {
        console.log(evento.target)
        const modalDeCadastro = document.querySelector("#formCadastroDeProdutos")
        modalDeCadastro.classList.remove("hidden")


    }

    static mostrarModalEditar(evento) {
        console.dir(evento.target)
        const botao = evento.target 
        if(botao.className == "botaoEditarItemListaAdmin"){
            
            const modalDeEdit = document.querySelector("#formEditarProdutos")
            modalDeEdit.classList.remove("hidden")
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
        const modalDeExcluir = document.querySelector("#containerModalExcluir")
        // const botaoCancelaExcluir = document.querySelector(".botaoCancelaExcluir")
        modalDeCadastro.classList.add("hidden")
        modalDeEdit.classList.add("hidden")
        modalDeExcluir.classList.add("hidden")
       




    }

    static capturarInfosCadastro(evento) {
        evento.preventDefault()
        const itemCadastro = {}
        console.log(evento)
        console.log(evento.target)
        console.log(evento.value)
        
        for (let i = 0; i < formularioCadastro.length; i++) {
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


