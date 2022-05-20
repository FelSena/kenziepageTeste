import { API } from "../Api/Api.js";

class ControleDashboard {
    static id = ''
    static async delataItem(event){
        if(event.target.name === 'deletar'){
            this.id = event.target.dataset.id
            const modalConfirma = document.querySelector('.modalRemover');
            modalConfirma.classList.toggle('mostrar')
        }
        if(event.target.name === 'nao'){
            this.id = ''
            const modalConfirma = document.querySelector('.modalRemover');
            modalConfirma.classList.toggle('mostrar')
        }
        if(event.target.name === 'sim'){
            await API.deletaProduto(this.id);
            location.reload()
        }
        if(event.target.name === 'editar'){
            ControleDashboard.modalEditarProduto(event)
        }

    }

    static btnAdicionaProduto(event){
        event.preventDefault()
        const modalAdd = document.querySelector('.modalAdd');
        modalAdd.classList.toggle('modal-cadastro');
    }
    static cadastraProduto(event){
        event.preventDefault()
        const formItens = [...event.target];
        
        const values = {};
    
        formItens.forEach((item) => {
        if (item.name != "" ) {
            values[item.name] = item.value;
        }
        });
        console.log(values)
        API.criaProduto(values)
    }
    static mostraStatus(){
        const modalStatus = document.querySelector('.modalStatus');
        modalStatus.classList.toggle('mostra-status');
        setTimeout(() => {modalStatus.classList.toggle('mostra-status')}, 1200);
        
    }
    static mostraStatusErro(){
        const h2 = document.getElementById('mensagem-modal')
        h2.innerText = 'Algo deu errado, tente novamente!'
        
        const color = document.querySelector('.status-color');
        color.classList.toggle('status-errado')

        const modalStatus = document.querySelector('.modalStatus');
        modalStatus.classList.toggle('mostra-status');

        setTimeout(() => {modalStatus.classList.toggle('mostra-status');
                            
                            }, 1200);
        
        setTimeout(()=> {
            color.classList.toggle('status-errado');
            h2.innerText = 'Produto adicionado com sucesso!';
        }, 2400)
    }
    static fechaModalAPI(){
        const modalAdd = document.querySelector('.modalAdd');
        modalAdd.classList.toggle('modal-cadastro');
    }

    static modalEditarProduto(event){
        event.preventDefault()
        const modalEditar = document.querySelector('.modalEditar');
        modalEditar.classList.toggle('modal-editar')
        this.id = event.target.dataset.id
        ControleDashboard.constroiEditor(this.id)

    }

    static async constroiEditor(id){
        const dados = await API.listaProdutosPrivados()
        const produto = dados.filter(produto => produto.id === id)
        const inputNome = document.querySelector('.inputNome');
        const inputDescricao = document.querySelector('.inputDescricao');
        const seletorEdit = document.querySelector('.seletorEdit');
        const inputPreco = document.querySelector('.inputPreco');
        const inputLink = document.querySelector('.inputLink');
        
        const selectCategoria = () => {
            if(produto[0].categoria === 'Panificadora'){
                return 0
            } else if(produto[0].categoria === 'Frutas'){
                return 1
            } else if(produto[0].categoria === 'Bebidas'){
                return 2
            } 
        }
        inputNome.value = produto[0].nome;
        inputDescricao.value = produto[0].descricao;
        seletorEdit.selectedIndex = selectCategoria();
        inputPreco.value = produto[0].preco;
        inputLink.value = produto[0].imagem;

    }
    static editaProduto(event){
        event.preventDefault()
        const formItens = [...event.target];
        
        const values = {};
    
        formItens.forEach((item) => {
        if (item.name != "" ) {
            values[item.name] = item.value;
        }
        });
        console.log(values)
        API.editaProduto(values, this.id)
    }
}

export {ControleDashboard}