import React, {useEffect, useState} from 'react'
import api from '../services/api'

export default function Consultar(){

  const [livro, setLivro] = useState([])

  /*
  useEffect(() => {
    api.get("books")
    .then((resposta) => setLivro(resposta.data))
    .catch((err) => {
      console.log("Houve um erro!" + err)
    })
  }, [])
  */

  const metodoGet=()=>{
    api.get("books")
    .then((resposta) => setLivro(resposta.data))
    .catch((err) => {
      console.log("Houve um erro!" + err)
    })

    console.log(livro)
  }
    

  return(
    <>
        <h2>Consulta de Livros</h2>
        <p>não insira nenhum id para obter a lista completa</p>
        <br/>
        <div>
          <label>Insira o id do livro: </label>
          <input type='text'></input>
          <br/>
          <button onClick={()=>metodoGet()}>Consultar</button>
        </div>
        <div>
        </div>
    </>
  )
}