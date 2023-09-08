import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Conteudo from "./componentes/Conteudo";
import Rodape from "./componentes/Rodape";
import Estados from "./exemplos/Estados";

function App() {
  return (
    <>
      <Cabecalho
        logo="favico.png"
        titulo="fav.io"
        subtitulo="O melhor gerenciador da internet brasileira!!"
      />
      <Conteudo />
      <Estados/>
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
