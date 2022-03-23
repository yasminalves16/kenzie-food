import { Api } from "../db/api.js";

class Vitrine {
    static async listarProdutos(data){
        const ul = document.querySelector('ul')
        ul.innerHTML = ''

        data.forEach((produto) => {

            const template = this.templateProdutos(produto)
            ul.appendChild(template)

        });

    }

    static templateProdutos({nome, imagem, descricao, categoria, preco, id}){

        const li = document.createElement('li')
        li.innerHTML = `
            <figure>
            <img src="${imagem}" alt="${nome}">
            </figure>
            <h3>${nome}</h3>
            <p>${descricao}</p>
            <span>${categoria}</span>
            <p>${preco}</p>
            <button id='${id}'><img src="./../../src/img/carrinho.png" alt=""></button>
        `
        
        return li

    }

    static async analisarQualListar(){
        const token = JSON.parse(localStorage.getItem('auth'))
        if(token !== null){
            const meusProdutos = await Api.meusProdutos(token)
            return meusProdutos            
        }
        
        else{
            const produtos = await Api.produtos()
            return produtos
        }
    }

}

export {Vitrine}