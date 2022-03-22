class Vitrine {
    static async listarProdutos(data){
        const ul = document.querySelector('ul')
        ul.innerHTML = ''

        data.forEach((produto) => {

            const template = this.templateProdutos(produto)
            ul.appendChild(template)

        });

    }

    static templateProdutos({nome, imagem, descricao, categoria, preco}){

        const li = document.createElement('li')
        li.innerHTML = `
            <img src="${imagem}" alt="${nome}">
            <h3>${nome}</h3>
            <p>${descricao}</p>
            <span>${categoria}</span>
            <p>${preco}</p>
        `
        return li

    }
}

export {Vitrine}