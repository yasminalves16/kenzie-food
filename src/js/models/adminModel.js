
import {Api} from '../db/'

const ProdutosAdmin = class ProdutosAdmin {

     static async requisicao(){
        const produtos = await Api.produtos()
        console.log(produtos)

        produtos.forEach((produto) => {
        
            console.log(produto)
        
            const id = produto.id
            const img = produto.imagem
            const nome = produto.nome
            const categoria = produto.categoria
            const descricao = produto.descricao
        
            this.vitrineAdmin(id, img, nome, categoria, descricao)
        })

}

    static vitrineAdmin(id,img,nome,categoria,descricao) { 
        const ul = document.querySelector('#listaAdmin')
        const li = document.createElement('li')
        
        li.innerHTML=`
        <img src="${img}" class="imgIconListaAdmin"> 
        <h4 class="infosListaAdmin" class="nomeProdutoListaAdmin">${nome}</h4> 
        <span class="infosListaAdmin" class="categoriasListaAdmin">${categoria}</h4> 
        <span class="infosListaAdmin" class="descricaoListaAdmin">${descricao}</span> 
        <button id="${id}" class="botaoListaAdmin" id="botaoEditarItemListaAdmin"> <img src="" class="imgBotaoListaAdmin"> </button>
        <button id="${id}" class="botaoListaAdmin" id="botaoExcluirItemListaAdmin"> <img src="" class="imgBotaoListaAdmin"> </button>
        `
        ul.appendChild(li)

    }


}