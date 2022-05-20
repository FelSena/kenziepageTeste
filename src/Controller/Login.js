import { API } from "../Api/Api.js"

class Usuario {

    static formLogin(event){
        event.preventDefault()
        const dados = [...event.target]
        console.log(dados)
        const obj = {}
        dados.forEach(current =>{
            if(current.name){
                const  name  = current.name
                const value  = current.value

                obj[name] = value
            }

        })
        console.log(obj)
        API.logarUsuario(obj)

    }

    static formCadastro(event){
        event.preventDefault()
        const dados = [...event.target]
        console.log(dados)
        const obj = {}
        dados.forEach(current =>{
            if(current.name){
                const  name  = current.name
                const value  = current.value

                obj[name] = value
            }

        })
        
        API.registrarUsuario(obj)
    }

}

export {Usuario}