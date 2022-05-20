import { API } from "../Api/Api.js";
import { BuscaItem } from "./BarraPesquisa.js";
import { CategoriaDashboard } from "./CategoriasDashboard.js";
import { ControleDashboard } from "./controleDashboard.js";
import { Dashboard } from "./criaDashboard.js";


const meusProdutos = await API.listaProdutosPrivados()

Dashboard.criaCardDashboard(meusProdutos)

//PESQUISA PRODUTO
const pesquisar = document.getElementById('pesquisa')
pesquisar.addEventListener('keyup', () => BuscaItem.buscaItemDashboard(pesquisar.value));

//FILTRO CATEGORIA
const btnTodos  = document.querySelector('.produtos__btnTodos');
btnTodos.addEventListener('click', (event) => CategoriaDashboard.filtraTodos( meusProdutos))
const btnPanificadora = document.querySelector('.produtos__btnPanificadora');
btnPanificadora.addEventListener('click', (event) => CategoriaDashboard.filtraPanificacao(meusProdutos))
const btnFrutas = document.querySelector('.produtos__btnFrutas');
btnFrutas.addEventListener('click', (event) => CategoriaDashboard.filtraFrutas(meusProdutos))
const btnBebidas = document.querySelector('.produtos__btnBebidas');
btnBebidas.addEventListener('click', (event) => CategoriaDashboard.filtraBebidas(meusProdutos))

//BATAO DELETE
const tabelaProdutos = document.querySelector('.tabelasProdutos');
tabelaProdutos.addEventListener('click', (event) => ControleDashboard.delataItem(event));
const btnNao = document.querySelector('.nao');
btnNao.addEventListener('click', (event) => ControleDashboard.delataItem(event))
const btnSim = document.querySelector('.sim');
btnSim.addEventListener('click', (event) => ControleDashboard.delataItem(event))

//ADICIONAR PRODUTO
const btnAdicionaProduto = document.querySelector('.produtos__btnAdicionarProduto');
btnAdicionaProduto.addEventListener('click', (event) => ControleDashboard.btnAdicionaProduto(event));
const fechaModal = document.getElementById('closeModalAdd')
fechaModal.addEventListener('click', (event) => ControleDashboard.btnAdicionaProduto(event));

//FORM CADASTRO
const formCadastro = document.querySelector('.modal--open')
formCadastro.addEventListener('submit', (event) => ControleDashboard.cadastraProduto(event))

//FORM EDITAR PRODUTO
const btnFecharModal = document.getElementById('modalEdit');
btnFecharModal.addEventListener('click', (event) => ControleDashboard.modalEditarProduto(event))
const editFomr = document.querySelector('.modal--Editar')
editFomr.addEventListener('submit', (event) => ControleDashboard.editaProduto(event))