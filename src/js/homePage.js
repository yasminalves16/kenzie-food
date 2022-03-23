import {Api} from "./db/api.js"
import {Vitrine} from "./models/vitrine.js"

const produtosApi = await Api.produtos()

Vitrine.listarProdutos(produtosApi)