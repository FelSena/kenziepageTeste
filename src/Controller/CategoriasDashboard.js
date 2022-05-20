import { Dashboard } from "./criaDashboard.js";

class CategoriaDashboard {
   
    static filtraTodos(dados) {
        Dashboard.criaCardDashboard(dados);
    }
    static filtraPanificacao(dados) {
        const listSimples = dados.filter((produto) => {
            return produto.categoria === 'Panificadora';
        });
        Dashboard.criaCardDashboard(listSimples);
    }

    static filtraFrutas(dados) {
        const listRecheado = dados.filter((produto) => {
            return produto.categoria === 'Frutas';
        });
        Dashboard.criaCardDashboard(listRecheado);
    }
    
    static filtraBebidas(dados) {
        const listConfeitado = dados.filter((produto) => {
            return produto.categoria === 'Bebidas';
        });
        Dashboard.criaCardDashboard(listConfeitado);
    }
}

export {CategoriaDashboard}