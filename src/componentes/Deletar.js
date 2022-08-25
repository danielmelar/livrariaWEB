import React, {useEffect, useState} from 'react'
import api from '../services/api'

export default function Deletar(){

  const [id, setId] = useState('')
  const handlerChangeid=(e)=>{
    setId(e.target.value)
  }

  const [livro, setLivro] = useState([])

  /*
  useEffect(() => {
    api.delete("books/" + id)
    .then((resposta) => setLivro(resposta.data))
    .catch((err) => {
      console.log("Houve um erro!" + err)
    })
  }, [])
  */

  const metodoDelete=()=>{
    if(id == ""){
      return window.alert("campo vazio!")
    }else{
    api.delete("books/" + id)
    .then((resposta) => setLivro(resposta.data))
    .catch((err) => {
      console.log("Houve um erro!" + err)
    })

    window.alert("livro deletado com sucesso!")
  }
  }
    

  return(
    <>
        <h2>Exclusão de Livros</h2>
        <br/>
        <div>
          <label>Insira o id do livro: </label>
          <input type='text' value={id} onChange={(e)=>handlerChangeid(e)}></input>
          <br/>
          <button onClick={()=>metodoDelete()} >Excluir</button>
        </div>
    </>
  )
}