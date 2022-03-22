import{LoginCadastro} from "./controllers/loginRegisterControl.js"


const form = document.querySelector('#formCadastro')

form.addEventListener('submit', LoginCadastro.capturarValue.bind(LoginCadastro))