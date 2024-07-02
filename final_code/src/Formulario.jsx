import axios from "axios"
import React, { useEffect } from "react"

const Formulario = () => {

    const url = "https://randomuser.me/api/"

    useEffect(() => {
        axios.get(url).then(response => localStorage.setItem("lugares", JSON.stringify(response.data)))
    }, [])
    

  return (
      <div className='container'>
        <div className='col-6'>
          <div className='col'>
            <label htmlFor="name" className='form-label'>Nombre {" "}</label>
            <input type="text" id='name' className='form-control'/>
          </div>
          <div className='col'>
            <label htmlFor="name" className='form-label'>Destino {" "}</label>
            <input type="text" id='destino' className='form-control'/>
          </div>
          <div className='col'>
            <button className='btn btn-success'>Guardar</button>
          </div>
        </div>

        <div className='col-6'>
            <table className='table table-stripped'>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Destino</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
        </div>
      </div>
  )
}

export default Formulario
