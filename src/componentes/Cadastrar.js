import React, {useEffect, useState} from 'react'

export default function Cadastrar(){
    

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