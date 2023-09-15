import React from "react";
import { useState } from "react";

const Estados = () => {
    const [nome, setNome]=useState("Google")
    const [url, setUrl]=useState("https://www.google.com")
    const [favoritos, setFavoritos]=useState([])

    function adicionarFavorito(nome, url){
        let favorito={nome,url}
        setFavoritos([...favoritos,favorito])
        console.log(favoritos)
    }

    function handleInput(valor){
        setNome(valor)

    }
    return(
        <div>
            <h1>Estados</h1>
            <h1>{nome}</h1>
            <h1>{url}</h1>

            <form onSubmit={()=>alert("Site favorito adicionado!")}>
              <input type="text" value={nome} onChange={(e)=>handleInput(e.target.value)} />
              <br />
              <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)} />
              <button onClick={()=>adicionarFavorito(nome,url)}>Adicionar</button>
              <h1>Favoritos</h1>
              <ul>
              { favoritos.map( (fav) => <li key={fav.url}>{ fav.nome } <br />{ fav.url }</li>) }
              </ul>
            </form>
        </div>
    );
};
export default Estados;