import React, {useEffect, useState} from 'react'
import api from '../services/api'

export default function Editar(props){

  const [id, setId] = useState('')
  const handlerChangeid=(e)=>{
    setId(e.target.value)
  }
  const [titulo, setTitulo] = useState('')
  const handlerChangetitulo=(e)=>{
    setTitulo(e.target.value)
  }
  const [autor, setAutor] = useState('')
  const handlerChangeautor=(e)=>{
    setAutor(e.target.value)
  }

  const buscaLivro=()=>{
    const livro = props.livros.find(item =>{
      return item.id == id
    })

    setTitulo(livro.titulo)
    setAutor(livro.autor)
  }
  

  
  const metodoUpdate=()=>{
    api.put("books/" + id, {
      titulo: titulo,
      autor: autor
    })
    .then((resposta) => props.setLivro(resposta.data))
    .catch((err) => {
      console.log("Houve um erro!" + err)
    })
    
    window.alert("livro editado com sucesso!")
    
  }
  
  return(
    <>
        <h2>Edição de Livros</h2>
        <br/>
        <div>
          <label>Insira o id do livro: </label>
          <input type='text' value={id} onChange={(e)=>handlerChangeid(e)}></input>
          <button onClick={()=>buscaLivro()}>Buscar</button>
          <br/>
          <br/>
          <p>Titulo: {titulo}</p>
          <label>Insira um novo titulo do livro: </label>
          <input type='text' value={titulo} onChange={(e)=>handlerChangetitulo(e)}></input>
          <br/>
          <br/>
          <p>Autor: {autor}</p>
          <label>Insira um novo nome do autor: </label>
          <input type='text' value={autor} onChange={(e)=>handlerChangeautor(e)}></input>
          <br/>
          <button onClick={()=> metodoUpdate()}>Editar</button>
        </div>
    </>
  )
}