import React from "react";
import { BrowserRouter } from "react-router-dom";
import Principal from "./paginas/Principal";
import LoginUsuario from "./paginas/LoginUsuario";
import CadastroUsuario from "./paginas/CadastroUsuario";


const routes = () => {
    return(
        <BrowserRouter>
        <Routes>

            <Route path="/" element={Principal}></Route>
            <Route path="login" element={LoginUsuario}></Route>
            <Route path="/cadastro" element={CadastroUsuario}></Route>

        </Routes>
        </BrowserRouter>
        
    )
}

export default routes;