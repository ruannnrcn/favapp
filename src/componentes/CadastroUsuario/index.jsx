import React, { useState } from "react";

const CadastroUsuario = () => {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");

    function cadastrarUsuario (email, nome, senha) {
        let usuario = {email, nome, senha};
        console.log(usuario)
        localStorage.setItem("usuario", JSON.stringify (usuario))
         
    }

    function validacaoSenha (email, nome, senha, confirmSenha) {
        if( senha!=confirmSenha){
            alert("as senhas não coincidem")
        }
        else {
            cadastrarUsuario(email, nome, senha)
        }
    }

    return (
        <div>
            <span>E-Mail: </span>
            <input type="email" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />

            <span>Nome: </span>
            <input type="text" 
            value={nome}
            onChange={(e)=> setNome(e.target.value)}
            />

            <span>Senha: </span>
            <input type="password" 
            value={senha}
            onChange={(e)=> setSenha(e.target.value)}
            />

            <span>Confirmar Senha: </span>
            <input type="password" 
            value={confirmSenha}
            onChange={(e)=> setConfirmSenha(e.target.value)}
            />
            
            <input type="button" onClick={()=>validacaoSenha(senha, confirmSenha)} value="cadastro" />
        </div>
    )
}

export default CadastroUsuario