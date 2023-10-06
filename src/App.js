import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import CadastroUsuario from "./componentes/CadastroUsuario";
import Conteudo from "./componentes/Conteudo";
import LoginUsuario from "./componentes/LoginUsuario";
import Rodape from "./componentes/Rodape";

function App() {
  return (
    <>
      <Cabecalho
        logo="favico.png"
        titulo="fav.io"
        subtitulo="O melhor gerenciador da internet brasileira!!"
      />

      {/* <Conteudo /> */}

      <CadastroUsuario/>

      {/* <LoginUsuario/> */}

      <Rodape
        dataAtual="Data Atual: "
        facebook="facebook.svg"
        instagram="instagram.svg"
        twitter="twitter.svg"
        whatsapp="whatsapp.svg"
      />
    </>
  );
}

export default App;
