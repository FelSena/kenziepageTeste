class CriaCarrinho{
    // static verificaCarrinho(){
    //     if(JSON.parse(localStorage.cart) !== typeof 'undefined'){
    //         CriaCarrinho.criaCarrinho(JSON.parse(localStorage.cart))
    //     }
    // }

    static criaCarrinho(dados){
        const ul = document.querySelector('.ulCarrinho');
        ul.innerHTML = '';
        const carrinhoVazio = document.getElementById('carrinhoVazio')
        carrinhoVazio.innerHTML = '';
        dados.forEach(produto => {
            const li = document.createElement('li')
            li.setAttribute('class', 'liCarrinho')
            
            const divCarrinho = document.createElement("div")
            divCarrinho.setAttribute('class', 'divCarrinho')

            const img = document.createElement('img')
            img.setAttribute('src', `${produto.imagem}`)
    
            const h2 = document.createElement('h2')
            h2.innerText = `${produto.nome}`
            const small = document.createElement('small')
            small.innerText = `${produto.categoria}`
            const price = document.createElement('p')
            price.innerText = `R$${produto.preco.toFixed(2)}`

            const div = document.createElement('textoCarrinho')
            div.setAttribute('class', 'textoCarrinho')

            const button = document.createElement('button')
            button.setAttribute('data-id', `${produto.id}`)
            button.setAttribute('id', 'btnLixo')
            
            div.appendChild(h2)
            div.appendChild(small)
            div.appendChild(price)
            divCarrinho.appendChild(img)
            divCarrinho.appendChild(div)
            li.appendChild(divCarrinho)
            li.appendChild(button)
            ul.appendChild(li)
    
        });
    }
}

export {CriaCarrinho}