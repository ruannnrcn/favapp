import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroUsuario from "./paginas/CadastroUsuario";
import LoginUsuario from "./paginas/LoginUsuario"
import Principal from "./paginas/Principal"
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";

const Rotas = () => {
    return(
        <BrowserRouter>
        <Cabecalho
        logo="favico.png"
        titulo="fav.io"
        subtitulo="O melhor gerenciador da internet brasileira!!"
      />
        <Routes>
            <Route path="/" element={<Principal/>}></Route>
            <Route path="/login" element={<LoginUsuario/>}></Route>
            <Route path="/cadastro" element={<CadastroUsuario/>}></Route>
        </Routes>
        <Rodape
        dataAtual="Data Atual: "
        facebook="facebook.svg"
        instagram="instagram.svg"
        twitter="twitter.svg"
        whatsapp="whatsapp.svg"
      />
        </BrowserRouter>
        
    )
}

export default Rotas;


