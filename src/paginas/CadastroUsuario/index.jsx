import React, { useState } from "react";

const CadastroUsuario = () => {
    const [email, setEmail] = useState("");
    const [nomeCadastro, setNome] = useState("");
    const [senhaCadastro, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");

    function cadastrarUsuario (email, nomeCadastro, senhaCadastro) {
        let usuario = {email, nomeCadastro, senhaCadastro};
        localStorage.setItem("usuario", JSON.stringify (usuario));
    }

    function validacaoSenha (senhaCadastro, confirmSenha) {
        if( senhaCadastro!=confirmSenha){
            alert("As senhas não coincidem.")
        }
        else {
            cadastrarUsuario(email, nomeCadastro, senhaCadastro)
        }
    }

    return (
        <div>
            <form action="">
                <label>E-Mail:</label>
                <input type="email" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />

                <label>Nome:</label>
                <input type="text" 
                value={nomeCadastro}
                onChange={(e)=> setNome(e.target.value)}
                />

                <label>Senha:</label>
                <input type="password" 
                value={senhaCadastro}
                onChange={(e)=> setSenha(e.target.value)}
                />

                <label>Confirmar Senha:</label>
                <input type="password" 
                value={confirmSenha}
                onChange={(e)=> setConfirmSenha(e.target.value)}
                />
                <input type="button" onClick={()=>validacaoSenha(senhaCadastro, confirmSenha)} value="Cadastrar Usuário" />
            </form>
            
        </div>
    )
}

export default CadastroUsuario