class verificaLogin {
    static verificarUsuario() {
        const usuarioLogado = localStorage.TokenCapstone;
        if(usuarioLogado === undefined || usuarioLogado === '[object Object]'){
            return
        } else {
            verificaLogin.usuarioOn()
        }
    }

    static usuarioOn(){
        const botaoLogin = document.querySelector('.main')
        botaoLogin.innerText = 'Usuario'
        const ul = botaoLogin.parentElement.children[1]
        console.log(ul)
        ul.innerHTML = `<li>
        <label for="dashboad">Dashboard</label>
        <button id="dashboad">Dashboard</button>
      </li>

      <li>
        <label for="logout">Logout</label>
        <button id="logout">Logout</button>
      </li>`
    }

    static identificaClick(event){
        const elementoClicado = event.target.id;
        if(elementoClicado === 'dashboad'){
            window.location = '../src/pages/index.html'
        }
        if(elementoClicado === 'logout'){
            localStorage.removeItem('TokenCapstone')
            location.reload()
        }
    }
}

export {verificaLogin}