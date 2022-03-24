import { Api } from "../db/api.js";
import {HomePageControle} from './../controllers/homeControl.js'

class Vitrine {
    static async listarProdutos(data){
        const ul = document.querySelector('.vitrine')
        ul.innerHTML = ''

        data.forEach((produto) => {

            const template = this.templateProdutos(produto)
            ul.appendChild(template)

        });

    }

    static templateProdutos({nome, imagem, descricao, categoria, preco, id}){
        const precoFormatado = HomePageControle.formatarMoedaProdutos(preco)

        const li = document.createElement('li')
        li.innerHTML = `
            <figure>
            <img src="${imagem}" alt="${nome}">
            </figure>
            <h3>${nome}</h3>
            <p>${descricao}</p>
            <span>${categoria}</span>
            <p>${precoFormatado}</p>
            <button id='${id}'><img src="./../../src/img/carrinho.png" alt="" id='${id}'></button>
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

    static checarSeLoginExiste(){
        const token = JSON.parse(localStorage.getItem('auth'))
        if(token !== null){
            const botaoLogin = document.querySelector('#botaoLogin')
            botaoLogin.innerHTML = 'Logout'
            botaoLogin.id = 'logout'
            const botaoAdmin = document.querySelector('#adminPage')
            botaoAdmin.style.display = 'inline'
        }
        else{
            const botaoLogin = document.querySelector('#botaoLogin')
            botaoLogin.innerHTML = 'Login / Registrar'
            botaoLogin.id = 'botaoLogin'
            const botaoAdmin = document.querySelector('#adminPage')
            botaoAdmin.style.display = 'none'
        }
    }

}

export {Vitrine}