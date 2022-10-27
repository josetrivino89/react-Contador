import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Contador=()=> {
    const[Contador,setContador] =useState(0)
    const incrementador =()=>{
        setContador (Contador + 1 )
    }
    const disminuirr =()=>{
        setContador (Contador - 1 )
    }
  return (
    <div>
        <h2>Contador</h2>
        <h3>nuestro numero aumentado: {Contador}</h3>
        <h4>
          {Contador > 2 ? "Es mayor que dos" : "Es menor a dos"}
  
        </h4>
        <Button variant="warning" onClick={incrementador}>Aumentar</Button>
        <Button variant="success" onClick={disminuirr}>Disminuir</Button>

    </div>
  )
}

export default Contador