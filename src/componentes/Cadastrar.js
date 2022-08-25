import React, {useEffect, useState} from 'react'
import api from '../services/api'

export default function Cadastrar(){

  const [livro, setLivro] = useState([])

  const [titulo, setTitulo] = useState('')
  const handlerChangetitulo=(e)=>{
    setTitulo(e.target.value)
  }
  const [autor, setAutor] = useState('')
  const handlerChangeautor=(e)=>{
    setAutor(e.target.value)
  }

  /*
  useEffect(() => {
    api.post("books", {
      titulo: titulo,
      autor: autor
    })
    .then((resposta) => setLivro(resposta.data))
    .catch((err) => {
      console.log("Houve um erro!" + err)
    })
  }, [])
  */


  const metodoPost=()=>{
    if(titulo == "" || autor == ""){
      return window.alert("Campo titulo e autor não podem ser vazios")
    }else{
    api.post("books", {
      titulo: titulo,
      autor: autor
    })
    .then((resposta) => setLivro(resposta.data))
    .catch((err) => {
      console.log("Houve um erro!" + err)
    })
    
    window.alert("livro cadastrado com sucesso!")
    }
  }

    

  return(
    <>
        <h2>Cadastro de Livros</h2>
        <br/>
        <div>
          <label>Insira o titulo do livro: </label>
          <input type='text' value={titulo} onChange={(e)=> handlerChangetitulo(e)}></input>
          <p>titulo: {titulo}</p>
          <br/>
          <label>Insira o nome do autor: </label>
          <input type='text' value={autor} onChange={(e)=> handlerChangeautor(e)}></input>
          <p>autor: {autor}</p>
          <br/>
          <button onClick={()=> metodoPost()}>Cadastrar</button>
        </div>
    </>
  )
}