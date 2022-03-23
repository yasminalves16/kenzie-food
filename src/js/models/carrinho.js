export class Carrinho{

    static valorTotal(){

    }

    static quantidade(){

    }

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
    
}