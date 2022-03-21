import {User} from './controllers/User.js'

const formLogin = document.querySelector('.formLogin')
formLogin.addEventListener('submit', User.dataCallLogin.bind(User))
