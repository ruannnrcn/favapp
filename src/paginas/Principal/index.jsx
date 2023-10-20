import React from "react";
import Cabecalho from "../../componentes/Cabecalho";
import CadastroUsuario from "../../paginas/CadastroUsuario";
import Conteudo from "../../componentes/Conteudo";
import LoginUsuario from "../../paginas/LoginUsuario";
import Rodape from "../../componentes/Rodape";


const Principal = () => {
    return (
        <>
      <Cabecalho
        logo="favico.png"
        titulo="fav.io"
        subtitulo="O melhor gerenciador da internet brasileira!!"
      />

      {/* <Conteudo /> */}

      <CadastroUsuario/>

      <br></br>

      <LoginUsuario/>

      <Rodape
        dataAtual="Data Atual: "
        facebook="facebook.svg"
        instagram="instagram.svg"
        twitter="twitter.svg"
        whatsapp="whatsapp.svg"
      />
    </>
    )
}

export default Principal