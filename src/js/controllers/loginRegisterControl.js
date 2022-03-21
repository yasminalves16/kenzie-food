class Post {
    static postUrl = 'https://api-blog-m2.herokuapp.com/post?page=1'
    static postCreate = 'https://api-blog-m2.herokuapp.com/post'


    static async listPost() {
        const myTokenId = JSON.parse(localStorage.getItem('auth'));

        const response = await fetch(`${this.postUrl}`, {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${myTokenId.token}`
            },
        })

        const responseData = await response.json()
        console.log(responseData)
        responseData.data.forEach((obj) => this.templatePost(obj))

    }

    static headerBlogCallback(event) {
        const button = event.target

        if (button.id == 1) {
            localStorage.clear();
            window.location.href = './../../src/html/login.html'
        }

    }

    static headerBlog() {
        const myInfo = JSON.parse(localStorage.getItem('info'));

        const user = document.querySelector('.myName')
        const img = document.querySelector('.myPicture')

        user.innerHTML = myInfo.username
        img.src = myInfo.avatarUrl
    }

    static templatePost(obj) {
        const ul = document.querySelector('.postSpot')
        const li = document.createElement("li")
        const myInfo = JSON.parse(localStorage.getItem('info'));
        const finalInfo = JSON.stringify(myInfo.id)
        const idStr = JSON.stringify(obj.owner.id)

        if (finalInfo == idStr) {
            li.innerHTML = `
        <figure>
          <img src="${obj.owner.avatarUrl}" alt="myPicture">
        </figure>
        <section>
          <h2>${obj.owner.username}</h2>
          <div>
          <p>${obj.post}</p>
          </div>
        </section>
        <div>
          <button class="edit" id='${obj.id}'>Editar</button>
          <button class="apagar" id='${obj.id}'>Apagar</button>
          <span>${obj.createdAt.replace(/-/gi, '/').split('/').reverse().join('/')}</span>
        </div> `

        }

        else {
            li.innerHTML = `
        <figure>
          <img src="${obj.owner.avatarUrl}" alt="myPicture">
        </figure>
        <section>
          <h2>${obj.owner.username}</h2>
          <div>
          <p>${obj.post}</p>
          </div>
        </section>
        <div>        
          <span>${obj.createdAt.replace(/-/gi, '/').split('/').reverse().join('/')}</span>
        </div> `

        }
        ul.appendChild(li)
    }

    static async createPost(value) {
        const myTokenId = JSON.parse(localStorage.getItem('auth'));

        const response = await fetch(`${this.postCreate}`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${myTokenId.token}`,
            },
            'body': JSON.stringify({
                "content": `${value}`,
            })
        })
        const responseData = await response.json()
        console.log(responseData)

    }

    static async callbackPost(event) {
        event.preventDefault()
        const ul = document.querySelector('.postSpot')
        const inputs = event.target

        const response = await this.createPost(inputs[0].value)
        ul.innerHTML = ''
        this.listPost()

    }

    static async deletePost(id) {

        const myTokenId = JSON.parse(localStorage.getItem('auth'));

        const response = await fetch(`${this.postCreate}/${id}`, {
            'method': 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${myTokenId.token}`
            },
        })
    }

    static async callbackEditApagar(event) {
        const ul = document.querySelector('.postSpot')
        const button = event.target
        console.dir(button)
        if (button.className == 'apagar') {
            console.log('entrou')
            const response = await this.deletePost(button.id)
            ul.innerHTML = ''
            this.listPost()
        }

        if (button.className == "edit") {

            const modal = document.querySelector('.modal')
            modal.style.display = 'inline'
            modal.id = button.id
                        
        }

    }



    static async editPost(id, value) {
        const myTokenId = JSON.parse(localStorage.getItem('auth'));

        const response = await fetch(`${this.postCreate}/${id}`, {
            'method': 'PATCH',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${myTokenId.token}`
            },
            'body': JSON.stringify({
                "newContent": `${value}`,
            })
        })

        console.log(response)

    }

    static async editCallback(event){
        event.preventDefault()        
        const inputs = event.target
        const modal = document.querySelector('.modal')

        const response = await this.editPost(modal.id, inputs[0].value)
        modal.style.display = 'none'
        const ul = document.querySelector('.postSpot')
        ul.innerHTML = ''
        this.listPost()
    }
}

export { Post }

