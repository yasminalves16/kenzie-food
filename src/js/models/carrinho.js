export class Carrinho{

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
        li.innerHTML = `
            <figure>
            <img src="${imagem}" alt="${nome}">
            </figure>
            <h3>${nome}</h3>
            <span>${categoria}</span>
            <p>${preco}</p>
            <button id='${id}'><img src="src/img/remover-produto.png" alt=""></button>
        `

        return li
    }

    static removerProduto(){

    }

    static templateQuantidadePreco(){
        const divCarrinho = document.querySelector('.div-carrinho')
        const ulCarrinho = document.querySelector('.ulCarrinho')

        if(ulCarrinho.childElementCount > 0){

            const divQuantidade = document.createElement('div')
            divQuantidade.innerHTML = `
                <p>Quantidade <span id="quantidadeTotal">0</span></p>
            `
            const divPrecoTotal = document.createElement('div')
            divPrecoTotal.innerHTML = `
                <p>Total <span id="precoTotal">00</span></p>
            `

            divCarrinho.appendChild(divQuantidade)
            divCarrinho.appendChild(divPrecoTotal)

        }
    }

    static quantidadeTotal(produtos){
        const quantidadeTotal = document.querySelector('#quantidadeTotal')

        const somaQuantidade = produtos.forEach((element) => {

            element += 1

        })

        quantidadeTotal.innerText = `${somaQuantidade}`
    }

    static valorTotal(produtos){
        const precoTotal = document.querySelector('#precoTotal')

        const somaTotal = produtos.reduce((total, {preco}) => {

            return total += preco

        }, 0)

        precoTotal.innerText = `${somaTotal}`
    }
}