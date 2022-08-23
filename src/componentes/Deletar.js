import React, {useEffect, useState} from 'react'

export default function Deletar(){
    

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