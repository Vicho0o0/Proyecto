import axios from "axios"
import React, { useEffect, useState } from "react"
import Ubicaciones from "./Ubicaciones"

const Formulario = () => {

    const url = "http://45.236.130.191/tours.php"
    const [lugares, setLugares] = useState([])

    useEffect(() => {
        axios.get(url).then(response => {
              localStorage.setItem("lugares", JSON.stringify(response.data))
              setLugares(JSON.parse(localStorage.getItem("lugares")))
            })
    }, [])

  return (
    <>
      <div className='container'>
        <div className="row">
          <div className='col-6'>
            <div className='col'>
              <label htmlFor="name" className='form-label'>
                Nombre {" "}
              </label>
              <input type="text" id='names' className='form-control'/>
            </div>
            <div className='col'>
              <label htmlFor="name" className='form-label'>Destino {" "}</label>
              <input type="text" id='destinos' className='form-control'/>
            </div>
            <div className='col'>
              <button className='btn btn-success'>Guardar</button>
            </div>
          </div>
        </div>
        
        <div className='col-6'>
            <Ubicaciones lugare={lugares}/>
        </div>
      </div>
    </>
  )
}

export default Formulario
