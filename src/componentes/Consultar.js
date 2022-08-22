import React, {useEffect, useState} from 'react'

export default function Consultar(){
    

  return(
    <>
        <h2>Consulta de Livros</h2>
        <p>não insira nenhum id para obter a lista completa</p>
        <div>
          <label>Insira o id do livro: </label>
          <input type='text'></input>
          <br/>
          <button>Consultar</button>
        </div>
    </>
  )
}