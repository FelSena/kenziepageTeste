class CriaCards{
    static criaCard(dados){
        const ul = document.querySelector('.listaCards')
        ul.innerHTML = ''
        dados.forEach(produto => {
            const li = document.createElement('li')
            li.setAttribute('class', 'card')
    
            const img = document.createElement('img')
            img.setAttribute('src', `${produto.imagem}`)
    
            const h2 = document.createElement('h2')
            h2.innerText = `${produto.nome}`
            const p = document.createElement('p')
            p.innerText = `${produto.descricao}`
            const small = document.createElement('small')
            small.innerText = `${produto.categoria}`
            const price = document.createElement('p')
            price.innerText = `R$${produto.preco.toFixed(2)}`
            const button = document.createElement('button')
            button.setAttribute('data-id', `${produto.id}`)
            //const cartIcon = document.createElement('img')
            //cartIcon.setAttribute('src', './Src/icons/VectorCarrinho.svg')
            //button.appendChild(cartIcon)
            
            li.appendChild(img)
            li.appendChild(h2)
            li.appendChild(p)
            li.appendChild(small)
            li.appendChild(price)
            li.appendChild(button)
    
            ul.appendChild(li)
    
        });
    }
}

export { CriaCards }