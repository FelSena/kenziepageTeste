import { API } from "../Api/Api.js";

class Dashboard {
    static criaCardDashboard(dados){
        const ul = document.querySelector('.tabelasProdutos')
        ul.innerHTML = ''
        dados.forEach(produto => {
            const li = document.createElement('li')
    
            const divProduto = document.createElement('div')
            divProduto.setAttribute('class', 'produto')

            const img = document.createElement('img')
            img.setAttribute('src', `${produto.imagem}`)
            const h2 = document.createElement('h2')
            h2.innerText = `${produto.nome}`

            divProduto.appendChild(img)
            divProduto.appendChild(h2)

            const span = document.createElement('span')
            span.innerText = `${produto.categoria}`
            const p = document.createElement('p')
            p.innerText = `${produto.descricao.slice(0, 30)}...`
            
            const divBtn = document.createElement('div')
            const btnEdit = document.createElement('button')
            btnEdit.setAttribute('data-id', `${produto.id}`)
            btnEdit.setAttribute('id', 'editar')
            btnEdit.setAttribute('name', 'editar')
            
            const btnDelete = document.createElement('button')
            btnDelete.setAttribute('data-id', `${produto.id}`)
            btnDelete.setAttribute('id', 'deletar')
            btnDelete.setAttribute('name', 'deletar')

            divBtn.appendChild(btnEdit)
            divBtn.appendChild(btnDelete)

            li.appendChild(divProduto)
            li.appendChild(span)
            li.appendChild(p)
            li.appendChild(divBtn)
    
            ul.appendChild(li)
    
        });
    }
    
}

export { Dashboard }