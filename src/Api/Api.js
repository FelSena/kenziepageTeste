import { ControleDashboard } from "../Controller/controleDashboard.js";
import { Dashboard } from "../Controller/criaDashboard.js";
import { verificaLogin } from "../Controller/verificarLogin.js";

class API {
    static baseUrl = 'https://api-kenzie-food.herokuapp.com/';
    static token = localStorage.TokenCapstone;
    static meusProdutos = API.listaProdutosPrivados()

    static async listaProdutos(){
        const URL = `${this.baseUrl}products`;
    
        const output = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.error(err);
        });
        return output
    }

    static registrarUsuario(dados) {
        const URL = `${this.baseUrl}auth/register`;

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            const cadastroOk = document.querySelector('.cadastro')
            cadastroOk.innerHTML = `<h2>CADASTRO REALIZADO.</h2>`
        })
        .catch((err) => {
            const cadastroOk = document.querySelector('.cadastro')
            cadastroOk.innerHTML = `<h2>Erro! Tente novamente mais tarde!</h2>`
            console.error(err);
        });
    }

    static async logarUsuario(dados) {
        
        const URL = `${this.baseUrl}auth/login`;
        
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            localStorage.setItem('TokenCapstone', response);
            Dashboard.criaCardDashboard(this.meusProdutos);
        })
        .catch((err) => {
            console.error(err);
        })
    }

    static async listaProdutosPrivados(){
        const URL = `${this.baseUrl}my/products`;
        const meusProdutosPrivados = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API.token}`
            },
        })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            return response
        })
        .catch((err) => {
            console.error(err);
        });
        return meusProdutosPrivados
    }

    static async criaProduto(dados){
        const URL = `${this.baseUrl}my/products`;
        
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API.token}`
            },
            body: JSON.stringify(dados)
        })
        .then(async (response) => {
            if(response.ok === true){
                const newData = await API.listaProdutosPrivados()
                Dashboard.criaCardDashboard(newData);
                ControleDashboard.fechaModalAPI();
                ControleDashboard.mostraStatus();
            }
            if(response.ok === false){
                ControleDashboard.fechaModalAPI();
                ControleDashboard.mostraStatusErro();
            }
            return response.json()
        })  
        .catch((err) => {
            console.error(err);
            
        })
    }

    static async editaProduto(dados, idProduto){
        const URL = `${this.baseUrl}my/products/${idProduto}`;
        
        await fetch(URL, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API.token}`
            },
            body: JSON.stringify(dados)
        })
        .then((response) => {
            location.reload()
            return response.json()
        })  
        .catch((err) => {
            console.error(err);
            
        })
    }

    static async deletaProduto(idProduto){
        const URL = `${this.baseUrl}my/products/${idProduto}`;
        
        await fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API.token}`
            },
        })
        .then((response) => {
            return response.json()
        })  
        .catch((err) => {
            console.error(err);
        })
    }
}

export { API }