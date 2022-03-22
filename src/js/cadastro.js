import{LoginCadastro} from "./models/loginRegisterModel.js"


const form = document.querySelector('#formCadastro')

form.addEventListener('submit', LoginCadastro.capturarValue.bind(LoginCadastro))