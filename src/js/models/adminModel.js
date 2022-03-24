const ModalAdmin = class ModalAdmin {
    // static modalCadastro = document.querySelector(".formCadastroDeProdutos")
    // static modalEditar  = document.querySelector(".formEditarProdutos")



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

            /*const id = produto.id
            const img = produto.imagem
            const nome = produto.nome
            const categoria = produto.categoria
            const descricao = produto.descricao*/

           const template =  this.vitrineAdmin(produto)
            ul.appendChild(template)
        })


    }

    static vitrineAdmin({id, imagem, nome, categoria, descricao}) {
        const ul = document.querySelector('#listaApi')
        const li = document.createElement('li')

        li.innerHTML = `
        <img src="${imagem}" class="imgIconListaAdmin"> 
        <h4 class="infosListaAdmin" class="nomeProdutoListaAdmin">${nome}</h4> 
        <span class="infosListaAdmin" class="categoriasListaAdmin">${categoria}</h4> 
        <span class="infosListaAdmin" class="descricaoListaAdmin">${descricao}</span> 
       
        `

        const buttonEdit = document.createElement('button')
        buttonEdit.classList.add('botaoEditarItemListaAdmin')
        buttonEdit.classList.add(`${id}`)
        const imgButtonEdit = document.createElement('img')
        imgButtonEdit.classList.add('imgBotaoListaAdmin')
        const buttonExcluir = document.createElement('button')
        buttonExcluir.classList.add('botaoExcluirItemListaAdmin')
        buttonExcluir.classList.add(`${id}`)
        const imgButtonExcluir = document.createElement('img')
        imgButtonExcluir.classList.add('imgBotaoListaAdmin')


        buttonEdit.appendChild(imgButtonEdit)
        buttonExcluir.appendChild(imgButtonExcluir)
        li.appendChild(buttonEdit)
        li.appendChild(buttonExcluir)
        return li

        buttonEdit.addEventListener('click', ModalAdmin.mostrarModalEditar)
        buttonExcluir.addEventListener('click', ModalAdmin.mostrarModalExcluir)



    }
}


// ProdutosAdmin.requisicao()



// const botaoAdicionar = document.querySelector("#botaoAdicionar")
// botaoAdicionar.addEventListener('click', ModalAdmin.mostrarModalCadastro)

// const botaoRemoveModalCadastro = document.querySelector(".fecharModalCad")
// botaoRemoveModalCadastro.addEventListener('click', ModalAdmin.removeModal)

// const botaoRemoveModalEdit = document.querySelector(".fecharModalEdit")
// botaoRemoveModalEdit.addEventListener('click', ModalAdmin.removeModal)

// const botaoRemoveModalExcluir = document.querySelector(".fecharModalExcluir")
// botaoRemoveModalExcluir.addEventListener('click', ModalAdmin.removeModal)

// const botaoCancelaExcluir = document.querySelector(".botaoCancelaExcluir")
// botaoCancelaExcluir.addEventListener('click', ModalAdmin.removeModal)

// const botaoDeCadastro = document.querySelector(".formAdminCadastro")
// const formularioCadastro = document.querySelector(".infosFormCadastro")
// formularioCadastro.addEventListener('submit', ModalAdmin.capturarInfosCadastro)




// <button id="${id}" class="botaoListaAdmin" class="botaoEditarItemListaAdmin"> <img src="" class="imgBotaoListaAdmin"> </button>
// <button id="${id}" class="botaoListaAdmin" class="botaoExcluirItemListaAdmin"> <img src="" class="imgBotaoListaAdmin"> </button>




export { ProdutosAdmin }
export { ModalAdmin }


