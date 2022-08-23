import React, {useEffect, useState} from 'react'
import api from '../services/api'

export default function Editar(){

  var id = 25
  
  const [livro, setLivro] = useState([])

  useEffect(() => {
    api.put("books/" + id, {
      titulo: "A biblia",
      autor: "homem"
    })
    .then((resposta) => setLivro(resposta.data))
    .catch((err) => {
      console.log("Houve um erro!" + err)
    })
  }, [])
    

  return(
    <>
        <h2>Edição de Livros</h2>
        <br/>
        <div>
          <label>Insira o id do livro: </label>
          <input type='text'></input>
          <button>Buscar</button>
          <br/>
          <p>Titulo: {}</p>
          <label>Insira um novo titulo do livro: </label>
          <input type='text'></input>
          <br/>
          <p>Autor: {}</p>
          <label>Insira um novo nome do autor: </label>
          <input type='text'></input>
          <br/>
          <button>Editar</button>
        </div>
    </>
  )
}