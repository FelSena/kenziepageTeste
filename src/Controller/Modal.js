const modalLogin     = document.getElementById('modal-login')
const modalCadastro  = document.getElementById('modal-cadastro')
const cadastro       = document.getElementById('Cadastro')
const login          = document.getElementById('login')
const FecharLogin    = document.getElementById('fechar-login')
const FecharCadastro = document.getElementById('fechar-cadastro')

cadastro.addEventListener('click', () => {modalCadastro.classList.add('mostrar')})
login.addEventListener('click', () => {modalLogin.classList.add('mostrar')})
FecharLogin.addEventListener('click', () =>{modalLogin.classList.remove('mostrar')})
FecharCadastro.addEventListener('click', () =>{ modalCadastro.classList.remove('mostrar')})
