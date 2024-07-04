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
              setLugares(JSON.parse(localStorage.getItem("lugares")))
            })
    }, [])

    const guardar = () => {
      const lugar = {id: lugares.length + 1,name: nombre, destino: destino}
      setLugares([...lugares, lugar])
      localStorage.setItem("lugares", JSON.stringify([...lugares, lugar]))
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
              <input type="text" id='names' className='form-control' value={nombre} onChange={e => setNombre(e.target.value)}/>
            </div>
            <div className='col'>
              <label htmlFor="name" className='form-label'>
                Destino 
              </label>
              <input type="text" id='destinos' className='form-control' value={destino} onChange={e => setDestino(e.target.value)}/>
            </div>
            <div className='col mt-3'>
              <button className='btn btn-success' onClick={guardar}>Guardar</button>
            </div>
          </div>
        </div>
        
        <div className='col-6 '>
            <Ubicaciones lugare={lugares}/>
        </div>
      </div>
    </>
  )
}

export default Formulario
