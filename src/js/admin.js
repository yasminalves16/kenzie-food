import {User} from './controllers/User.js'

const formCadastro = document.querySelector('.formCadastro')
formCadastro.addEventListener('submit', User.dataCallRegister.bind(User))

