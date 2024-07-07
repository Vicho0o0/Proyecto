import axios from "axios"
import React, { useEffect, useState } from "react"
import Ubicaciones from "./Ubicaciones"

const Formulario = () => {

    const url = "http://45.236.130.191/tours.php"
    const [lugares, setLugares] = useState([])
    const [nombre, setNombre] = useState("")
    const [destino, setDestino] = useState("")

    useEffect(() => {
        axios.get(url).then(response => {
              localStorage.setItem("lugares", JSON.stringify(response.data))
              setLugares(response.data)
            })
    }, [])

    const guardar = () => {
      const lugar = {id: lugares.length + 1,name: nombre, destino: destino}
      const Destinitos = [...lugares, lugar]
      setLugares(Destinitos)
      localStorage.setItem("lugares", JSON.stringify(Destinitos))
      setNombre("")
      setDestino("")
    }

  return (
    <>
        <div className='container'>
          <div className="row">
            <div className='col-6'>
              <div className='col'>
                <label htmlFor="name" className='form-label'> 
                  Nombre 
                </label>
                <input type="text" id='name' className='form-control' value={nombre} onChange={e => setNombre(e.target.value)}/>
              </div>
              <div className='col'>
                <label htmlFor="destino" className='form-label'>
                  Destino 
                </label>
                <input type="text" id='destino' className='form-control' value={destino} onChange={e => setDestino(e.target.value)}/>
              </div>
              <div className='col mt-3'>
                <button className='btn btn-success' onClick={guardar}>Guardar</button>
              </div>
            </div>
          
          
            <div className='col-6 '>
                <Ubicaciones lugares={lugares} setLugares={setLugares}/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Formulario
