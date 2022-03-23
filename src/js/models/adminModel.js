const ProdutosAdmin = class ProdutosAdmin {

    static async requisicao() {


        fetch('https://kenzie-food-api.herokuapp.com/products')
            .then(response => response.json())
            .then((data) => {

                data.forEach((produto) => {

                    console.log(produto)

                    const id = produto.id
                    const img = produto.imagem
                    const nome = produto.nome
                    const categoria = produto.categoria
                    const descricao = produto.descricao

                    this.vitrineAdmin(id, img, nome, categoria, descricao)
                })


            }).catch((error) => console.log(error))

    }

    static vitrineAdmin(id, img, nome, categoria, descricao) {
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
        console.log(ul)
        console.log(li)



        ul.appendChild(li)
        const modalCadastro = document.querySelector("#formCadastroDeProdutos")
        const modalEditar = document.querySelector("#formEditarProdutos")



    }
}

ProdutosAdmin.requisicao()

  
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
        console.log(evento) 
        const modalDeCadastro = document.querySelector("#formCadastroDeProdutos")
        const modalDeEdit = document.querySelector("#formEditarProdutos")
        modalDeCadastro.classList.add("hidden")
        modalDeEdit.classList.add("hidden")
        
    }


}

const botaoAdicionar = document.querySelector("#botaoAdicionar")
botaoAdicionar.addEventListener('click', ModalAdmin.mostrarModalCadastro)

const botaoRemoveModalCadastro = document.querySelector(".fecharModalCad")
botaoRemoveModalCadastro.addEventListener('click',ModalAdmin.removeModal )

const botaoRemoveModalEdit = document.querySelector(".fecharModalEdit")
botaoRemoveModalEdit.addEventListener('click',ModalAdmin.removeModal )
