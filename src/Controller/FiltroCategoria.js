import { API } from "../Api/Api.js";
import { CriaCards } from "./criarCards.js";

class Categoria {
   
    static filtraTodos(event, dados) {
        this.switchActive(event)
        CriaCards.criaCard(dados);
    }
    static filtraPanificacao(event, dados) {
        this.switchActive(event)
        const listSimples = dados.filter((produto) => {
            return produto.categoria === 'Panificadora';
        });
        CriaCards.criaCard(listSimples);
    }
    
    static filtraFrutas(event, dados) {
        this.switchActive(event)
        const listRecheado = dados.filter((produto) => {
            return produto.categoria === 'Frutas';
        });
        CriaCards.criaCard(listRecheado);
    }
    
    static filtraBebidas(event, dados) {
        this.switchActive(event)
        const listConfeitado = dados.filter((produto) => {
            return produto.categoria === 'Bebidas';
        });
        CriaCards.criaCard(listConfeitado);
    }

    static switchActive (event){
        console.log(event.target.parentElement)
        //let btnFamily = event.target.parentElement
        let btnTarget = event.target
        event.target.parentElement.children[0].classList.remove('ativo')
        event.target.parentElement.children[1].classList.remove('ativo')
        event.target.parentElement.children[2].classList.remove('ativo')
        event.target.parentElement.children[3].classList.remove('ativo')
        btnTarget.classList.add('ativo')
    }
}

export {Categoria}