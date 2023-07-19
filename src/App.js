import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Conteudo from "./componentes/Conteudo";
import Rodape from "./componentes/Rodape";

function App() {
  return (
    <>
      <Cabecalho
        logo="favicon.png"
        titulo="Fav.io"
        subtitulo="O melhor gerenciador da internet brasileira!!"
      />
    </>
  );
}

export default App;
