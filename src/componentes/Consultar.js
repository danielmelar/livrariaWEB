import React, {useEffect, useState} from 'react'
import api from '../services/api'
import '../App.css'

export default function Consultar(props){
  
  const [id, setId] = useState('')
  const handlerChangeid=(e)=>{
    setId(e.target.value)
  }

  const buscaId = props.livros.find(item => {
    return item.id == id;
  })

  const selecionaId=()=>{
    if(buscaId === buscaId){
      return window.alert("Id: " + buscaId.id + "\n"+"Titulo: " +  buscaId.titulo + "\n"+"Autor: " + buscaId.autor) 
    }
  }


  return(
    <>
        <h2>Consulta de Livros</h2>
        <br/>
        <div>
          <label>Insira o id do livro: </label>
          <input type='text' value={id} onChange={(e)=>handlerChangeid(e)}></input>
          <br/>
          <button onClick={()=> selecionaId()}>Consultar</button>
        </div>
        <div className='telaResult'>
        {props.livros?.map(livro => (
          <li key={livro.id}>
            <p>Id: {livro.id}</p>
            <p>Titulo: {livro.titulo}</p>
            <p>Autor: {livro.autor}</p>
            <br/>
          </li>
        ))}
        </div>
        
        
    </>
  )
        }