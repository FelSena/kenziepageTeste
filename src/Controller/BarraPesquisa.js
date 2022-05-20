import { API } from "../Api/Api.js";
import { Dashboard } from "./criaDashboard.js";
import { CriaCards } from "./criarCards.js";

class BuscaItem {
    static ul = document.querySelector('.listaCards')
    static ulDashboard = document.querySelector('.tabelasProdutos')

    static async buscaItem(valor){
        const data = await API.listaProdutos()
        const inputValue = valor.toLowerCase()
        let newData = [];
        this.ul.innerHTML = 'Produto não encontrado'
        data.forEach(produto => {
            if (produto.nome.toLowerCase().includes(inputValue) || produto.categoria.toLowerCase().includes(inputValue)){
                newData.push(produto);
            } 
            CriaCards.criaCard(newData)
        });  
    }
    static async buscaItemDashboard(valor){
        const data = await API.listaProdutosPrivados()
        const inputValue = valor.toLowerCase()
        let newData = [];
        this.ulDashboard.innerHTML = 'Produto não encontrado'
        data.forEach(produto => {
            if (produto.nome.toLowerCase().includes(inputValue) || produto.categoria.toLowerCase().includes(inputValue)){
                newData.push(produto);
            } 
            Dashboard.criaCardDashboard(newData)
        });
    }
}

export { BuscaItem }