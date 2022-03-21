import {Post} from './controllers/post.js'

const logout = document.querySelector('header')
logout.addEventListener('click', Post.headerBlogCallback)

Post.listPost()
Post.headerBlog()

const form = document.querySelector('.formInput')

form.addEventListener('submit',Post.callbackPost.bind(Post))

const post = document.querySelector('.postSpot')
post.addEventListener('click', Post.callbackEditApagar.bind(Post))

const modal = document.querySelector('.modal')
modal.addEventListener('submit', Post.editCallback.bind(Post))