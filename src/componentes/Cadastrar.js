import React, {useEffect, useState} from 'react'
import api from '../services/api'

export default function Cadastrar(){

  const [livro, setLivro] = useState([])

  useEffect(() => {
    api.post("books", {
      titulo: "Eu, Robo",
      autor: "Isaac Asimov"
    })
    .then((resposta) => setLivro(resposta.data))
    .catch((err) => {
      console.log("Houve um erro!" + err)
    })
  }, [])
    

  return(
    <>
        <h2>Cadastro de Livros</h2>
        <br/>
        <div>
          <label>Insira o titulo do livro: </label>
          <input type='text'></input>
          <br/>
          <label>Insira o nome do autor: </label>
          <input type='text'></input>
          <br/>
          <button>Cadastrar</button>
        </div>
    </>
  )
}