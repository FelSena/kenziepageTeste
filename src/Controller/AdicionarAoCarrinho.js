import { API } from "../Api/Api.js"
import { CriaCarrinho } from "./carrinhoDeCompras.js";

//Chamando minha callback botao
class AdicionarCarrinho{
    static interceptarEvent(event){
        let btnComprar = event.target
        if(btnComprar.tagName === 'BUTTON'){
            
            const idProduto = btnComprar.dataset.id
            AdicionarCarrinho.adicionarProduto(idProduto)   
            //vitrine.listar(carrinho.produtos, vitrineCarrinho)
        }
    }
    static produtos = [];
    static precoTotal = 0;

    //Chamando meu carrinho
    static async adicionarProduto(idProduto){
        const dados = await API.listaProdutos();
        const produto = dados.find((produto) => produto.id == idProduto)
        this.produtos.push(produto)
        this.precoTotal += produto.preco
        
        const quantidade = document.getElementById('quantidade');
        quantidade.innerText = `${this.produtos.length}`

        const valorTotal = document.getElementById('total')
        valorTotal.innerText = `R$${this.precoTotal.toFixed(2).replace('.',',')}`

        const carrinhoLocal = JSON.stringify(this.produtos) 
        localStorage.setItem("cart", carrinhoLocal)
        const carrinhoSalvo = JSON.parse(localStorage.cart)
        CriaCarrinho.criaCarrinho(carrinhoSalvo)
    }

    //Remover item do carrinho
    static removerProdutoCarrinho(event){

        const btnRemover = event.target
        const idProduto = event.target.dataset.id
        if(btnRemover.tagName === 'BUTTON'){
            const produtoIndex = this.produtos.findIndex((produto) => produto.id === idProduto)
            this.produtos.splice(produtoIndex, 1);//remover a partir do 0, o produto pelo index

            let novoTotal = 0;
            this.produtos.forEach(produto => {
                novoTotal += produto.preco
            });
            this.precoTotal = novoTotal
            localStorage.removeItem('cart')
            localStorage.setItem('cart', JSON.stringify(this.produtos))
            CriaCarrinho.criaCarrinho(this.produtos)

            const valorTotal = document.getElementById('total')
            valorTotal.innerText = `R$${this.precoTotal.toFixed(2).replace('.',',')}`

            const quantidade = document.getElementById('quantidade');
            quantidade.innerText = `${this.produtos.length}`
        }

    }
}

export {AdicionarCarrinho}

