import React, {useEffect, useState} from 'react'
import api from '../services/api'

export default function Deletar(){

  var id = 26

  const [livro, setLivro] = useState([])

  useEffect(() => {
    api.delete("books/" + id)
    .then((resposta) => setLivro(resposta.data))
    .catch((err) => {
      console.log("Houve um erro!" + err)
    })
  }, [])
    

  return(
    <>
        <h2>Exclusão de Livros</h2>
        <br/>
        <div>
          <label>Insira o id do livro: </label>
          <input type='text'></input>
          <br/>
          <button>Excluir</button>
        </div>
    </>
  )
}