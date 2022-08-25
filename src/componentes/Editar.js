import React, {useEffect, useState} from 'react'
import api from '../services/api'

export default function Editar(){

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
  
  const [livros, setLivro] = useState([])

  /*
  useEffect(() => {
    api.put("books/" + id, {
      titulo: titulo,
      autor: autor
    })
    .then((resposta) => setLivro(resposta.data))
    .catch((err) => {
      console.log("Houve um erro!" + err)
    })

    window.alert("livro editado com sucesso!")

  }, [])
  */
  

  const metodoUpdate=()=>{
    api.put("books/" + id, {
      titulo: titulo,
      autor: autor
    })
    .then((resposta) => setLivro(resposta.data))
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
          <button>Buscar</button>
          <br/>
          <p>Titulo:</p>
          <label>Insira um novo titulo do livro: </label>
          <input type='text' value={titulo} onChange={(e)=>handlerChangetitulo(e)}></input>
          <br/>
          <p>Autor: {}</p>
          <label>Insira um novo nome do autor: </label>
          <input type='text' value={autor} onChange={(e)=>handlerChangeautor(e)}></input>
          <br/>
          <button onClick={()=> metodoUpdate()}>Editar</button>
        </div>
    </>
  )
}