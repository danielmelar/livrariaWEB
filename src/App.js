import React, {useState, useEffect} from 'react'
import Consultar from './componentes/Consultar'
import Cadastrar from './componentes/Cadastrar'
import Deletar from './componentes/Deletar'
import Editar from './componentes/Editar'
import './App.css'

export default function App(){

  const [tela, setTela]=useState(0)

    
  const LinksPaginas=(t)=>{
    if(t==1){
      window.open('http://localhost:3000?1', '_self')
    }
    else if(t == 2){
      window.open('http://localhost:3000?2', '_self')
    }
    else if(t == 3){
      window.open('http://localhost:3000?3', '_self')
    }
    else if(t == 4){
      window.open('http://localhost:3000?4', '_self')
    }
  }

  useEffect(
    ()=>{
      // pega url
      const url=window.location.href
      // transforma a url em um array
      const res=url.split('?')
      setTela(res[1])
    }
  )

  // função que ira retornar as paginas
  const retornarTela=()=>{
    if (tela==1){
      return <Consultar/>
    }
    else if(tela==2){
      return <Cadastrar/>
    }
    else if(tela==3){
      return <Editar/>
    }
    else if(tela==4){
      return <Deletar/>
    }
    else{
      return <div>
              <button onClick={()=>LinksPaginas(1)}>Consultar</button>
              <button onClick={()=>LinksPaginas(2)}>Cadastrar</button>
              <button onClick={()=>LinksPaginas(3)}>Editar</button>
              <button onClick={()=>LinksPaginas(4)}>Deletar</button>
            </div>
    }
  }

  return(
    <section>
        <div className='titulo'>
          <h2>Livraria WEB</h2>
        </div>
      <div className='tela'>
        <div>
        </div>
        <div className='menu'>
          <p>O que deseja fazer?</p>
          <ul>
            <li>
              <button onClick={()=>LinksPaginas(1)}>Consultar</button>
            </li>
            <li>
              <button onClick={()=>LinksPaginas(2)}>Cadastrar</button>
            </li>
            <li>
              <button onClick={()=>LinksPaginas(3)}>Editar</button>
            </li>
            <li>
              <button onClick={()=>LinksPaginas(4)}>Deletar</button>
            </li>
          </ul>
        </div>
        <div className='telaFuncao'>
          {retornarTela()}
        </div>
        <div>
          
        </div>
      </div>
    </section>
  )
}
