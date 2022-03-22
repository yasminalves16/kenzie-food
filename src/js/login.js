import{LoginCadastro} from "./models/loginRegisterModel.js"


const form = document.querySelector('#formLogin')

form.addEventListener('submit', LoginCadastro.capturarValue.bind(LoginCadastro))