const ProdutosAdmin = class ProdutosAdmin {

    static async listarProdutos(data) {
        data.forEach((produto) => {

            /*const id = produto.id
            const img = produto.imagem
            const nome = produto.nome
            const categoria = produto.categoria
            const descricao = produto.descricao*/

            this.vitrineAdmin(produto)
        })

    }

    static vitrineAdmin({id, img, nome, categoria, descricao}) {
        const ul = document.querySelector('#listaApi')
        const li = document.createElement('li')

        li.innerHTML = `
        <img src="${img}" class="imgIconListaAdmin"> 
        <h4 class="infosListaAdmin" class="nomeProdutoListaAdmin">${nome}</h4> 
        <span class="infosListaAdmin" class="categoriasListaAdmin">${categoria}</h4> 
        <span class="infosListaAdmin" class="descricaoListaAdmin">${descricao}</span> 
        <button id="${id}" class="botaoListaAdmin" class="botaoEditarItemListaAdmin"> <img src="" class="imgBotaoListaAdmin"> </button>
        <button id="${id}" class="botaoListaAdmin" class="botaoExcluirItemListaAdmin"> <img src="" class="imgBotaoListaAdmin"> </button>
        `



        ul.appendChild(li)
        const modalCadastro = document.querySelector("#formCadastroDeProdutos")
        const modalEditar = document.querySelector("#formEditarProdutos")



    }
}

  
const ModalAdmin = class ModalAdmin{
    // static modalCadastro = document.querySelector(".formCadastroDeProdutos")
    // static modalEditar  = document.querySelector(".formEditarProdutos")
    
    
    
    static mostrarModalCadastro(evento){
        console.log(evento.target)
        const modalDeCadastro = document.querySelector("#formCadastroDeProdutos")
        modalDeCadastro.classList.remove("hidden")
        
        
    }

    static mostrarModalCadastro(evento){
        console.log(evento.target)
        const modalDeEdit = document.querySelector("#formEditarProdutos")
        modalDeEdit.classList.remove("hidden")
        
        
    }

    static removeModal(evento){
        evento.preventDefault() 
        const modalDeCadastro = document.querySelector("#formCadastroDeProdutos")
        const modalDeEdit = document.querySelector("#formEditarProdutos")
        modalDeCadastro.classList.add("hidden")
        modalDeEdit.classList.add("hidden")
        
    }


}


export {ProdutosAdmin}
export {ModalAdmin}