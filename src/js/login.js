import{LoginCadastro} from "./controllers/loginRegisterControl.js"


const form = document.querySelector('#formLogin')

form.addEventListener('submit', LoginCadastro.capturarValue)