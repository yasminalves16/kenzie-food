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

        const li = document.createElement('li')
        li.innerHTML = `
            <figure>
            <img src="${imagem}" alt="${nome}">
            </figure>
            <h3>${nome}</h3>
            <p>${descricao}</p>
            <span>${categoria}</span>
            <p>${preco}</p>
            <button id='${id}'><img src="" alt=""></button>
        `
        return li

    }

}

export {Vitrine}