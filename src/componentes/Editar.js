import React, {useEffect, useState} from 'react'

export default function Editar(){
    

  return(
    <>
        <h2>Edição de Livros</h2>
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