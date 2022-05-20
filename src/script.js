//IMPORTS
import { API } from "./Api/Api.js";
import { AdicionarCarrinho } from "./Controller/AdicionarAoCarrinho.js";
import { BuscaItem } from "./Controller/BarraPesquisa.js";
import { CriaCarrinho } from "./Controller/carrinhoDeCompras.js";
import { CriaCards } from "./Controller/criarCards.js";
import { Categoria } from "./Controller/FiltroCategoria.js";
import { Usuario } from "./Controller/Login.js";
import { verificaLogin } from "./Controller/verificarLogin.js";

//DATA PRODUTOS
const produtos = await API.listaProdutos()

//PESQUISA PRODUTO
const pesquisar = document.getElementById('inputBusca')
pesquisar.addEventListener('keyup', () => BuscaItem.buscaItem(pesquisar.value))

//CRIAR CARDS
CriaCards.criaCard(produtos)

//FILTRO CATEGORIA
const btnTodos  = document.querySelector('.estiloGeralBotoes--mostrarTodos');
btnTodos.addEventListener('click', (event) => Categoria.filtraTodos(event, produtos))
const btnPanificadora = document.querySelector('.estiloGeralBotoes--panificadora');
btnPanificadora.addEventListener('click', (event) => Categoria.filtraPanificacao(event, produtos))
const btnFrutas = document.querySelector('.estiloGeralBotoes--frutas');
btnFrutas.addEventListener('click', (event) => Categoria.filtraFrutas(event, produtos))
const btnBebidas = document.querySelector('.estiloGeralBotoes--bebidas');
btnBebidas.addEventListener('click', (event) => Categoria.filtraBebidas(event, produtos))

//BOTAO ADICIONAR CARRINHO
const vitrinePrincipal = document.querySelector('.listaCards');
vitrinePrincipal.addEventListener('click', (event) => AdicionarCarrinho.interceptarEvent(event));

//MODAL DE LOGIN/CADASTRO
const login = document.querySelector('.login');
login.addEventListener('submit',(event) => Usuario.formLogin(event));
const cadastro = document.querySelector('.cadastro');
cadastro.addEventListener('submit',(event) => Usuario.formCadastro(event));

//VERIFICA SE ESTA LOGADO:
verificaLogin.verificarUsuario()

//BOTAO USUARIO
const btnUsuarioLogado = document.querySelector('.fab')
btnUsuarioLogado.addEventListener('click', (event) => verificaLogin.identificaClick(event))

//REMOVER DO CARRINHO
const carrinho = document.querySelector('.ulCarrinho')
carrinho.addEventListener('click', (event) => AdicionarCarrinho.removerProdutoCarrinho(event))