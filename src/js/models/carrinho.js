import {HomePageControle} from "../controllers/homeControl.js"

export class Carrinho {

    static listarCarrinho(data){
        const ulCarrinho = document.querySelector('.ulCarrinho')
        ulCarrinho.innerHTML = ''
    
        data.forEach((produto) => {
            
            const template = this.templateCarrinho(produto)
            ulCarrinho.appendChild(template)

        });
    }

    static templateCarrinho({nome, imagem, categoria, preco, id}){
        
        const li = document.createElement('li')

        const precoFormatado = HomePageControle.formatarMoedaProdutos(preco)

        li.innerHTML = `
            <figure>
            <img src="${imagem}" alt="${nome}">
            </figure>
            <div class ="box">
            <h3>${nome}</h3>
            <span>${categoria}</span>
            <p class="preco">${precoFormatado}</p>
            </div>
            <button class="botaoRemover" id='${id}'><img id='${id}' src="src/img/remover-produto.png" alt=""></button>
        `

        return li
    }

    static templateQuantidadePreco(){
        const divCarrinho = document.querySelector('.div-carrinho')
        const ulCarrinho = document.querySelector('.ulCarrinho')
        
        if(ulCarrinho.childElementCount <= 1){
            
            const divQuantidade = document.createElement('div')
            divQuantidade.classList.add('divQuantidade')
            divQuantidade.innerHTML = `
                <p>Quantidade </p>
                <span id="quantidadeTotal">0</span>
            `
            const divPrecoTotal = document.createElement('div')
            divPrecoTotal.classList.add('divPrecoTotal')
            divPrecoTotal.innerHTML = `
                <p>Total </p>
                <span id="precoTotal">00</span>
            `

            divCarrinho.appendChild(divQuantidade)
            divCarrinho.appendChild(divPrecoTotal)

        }
    }

    static templateRemoverProduto(){
        const ulCarrinho = document.querySelector('.ulCarrinho')

        if(ulCarrinho.childElementCount === 0){

            const divQuantidade = document.querySelector('.divQuantidade')
            divQuantidade.innerHTML = ""

            const divPrecoTotal = document.querySelector('.divPrecoTotal')
            divPrecoTotal.innerHTML = ""

        }

    }

    static quantidadeTotal(produtos){
        const quantidadeTotal = document.querySelector('#quantidadeTotal')

        const somaQuantidade = produtos.length

        quantidadeTotal.innerText = `${somaQuantidade}`
    }

    static valorTotal(produtos){
        const precoTotal = document.querySelector('#precoTotal')

        const somaTotal = produtos.reduce((total, {preco}) => {

            return total += preco

        }, 0)

        const precoFormatado = HomePageControle.formatarMoedaProdutos(somaTotal)

        precoTotal.innerText = `${precoFormatado}`
    }
}

export class ModalCarrinho {

    static localModal = document.querySelector('main')

    static removerModalCarrinho(event){
        const modalParent = event.target.parentNode.parentNode
        const modalSeletor = document.querySelector('.containerModal')

        ModalCarrinho.localModal.removeChild(modalSeletor)
    }

    static criarModalCarrinho(){
        const containerModal = document.createElement('section')
        containerModal.classList.add('containerModal')

        const modal = document.createElement('div')
        modal.classList.add('modal')

        const divTitulo = document.createElement('div')
        divTitulo.classList.add('div-titulo')
        divTitulo.innerHTML = `
            <img src="src/img/carrinho.png" alt="Carrinho">
            <h3>Carrinho</h3>
        `

        const divCorpo = document.createElement('div')
        divCorpo.classList.add('div-carrinho')

        const removerModal = document.createElement('button')
        removerModal.classList.add('modalRemovido')
        removerModal.innerText = "x"
        removerModal.addEventListener('click', ModalCarrinho.removerModal)


        divTitulo.appendChild(removerModal)
        modal.appendChild(divTitulo)
        modal.appendChild(divCorpo)
        containerModal.appendChild(modal)
        ModalCarrinho.localModal.appendChild(containerModal)
    }

}