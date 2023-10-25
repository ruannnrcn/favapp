import React, { useState } from "react";


const LoginUsuario = () => {
    const [emailLogin, setEmail] = useState("");
    const [senhaLogin, setSenha] = useState("");

     
    function validacao () {
        let usuario = JSON.parse(localStorage.getItem('usuario'))
        console.log(usuario)

        let emailCadastrado = usuario.email
        let senhaCadastrada = usuario.senhaCadastro
    
        if(emailCadastrado === emailLogin && senhaCadastrada === senhaLogin) {
            alert("Logado com Sucesso!! Aguarde que em breve você será redirecionado para a página de destino.")
            
        } else {
            alert("E-mail ou senha incorretos!")
        }
    }

    return (
        <div>
            <h2>Faça seu Login!</h2>
            <form >
                <label >E-Mail: </label>
                <input type="email" 
                value={emailLogin}
                onChange={(e)=> setEmail(e.target.value)}
                required
                />

                <label>Senha: </label>
                <input type="password" 
                value={senhaLogin}
                onChange={(e)=> setSenha(e.target.value)}
                required
                />
              <input type="button" onClick={()=>validacao()} value="Login" />
            </form>

        </div>
    )
}

export default LoginUsuario