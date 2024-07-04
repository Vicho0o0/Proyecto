import React, {useState, useEffect} from 'react'

const Ubicaciones = () => {
    const [filaseleccionada, setFilaseleccionada] = useState (null);
    const [lugare, setLugares] = useState([]);
    

    useEffect(() => {
        const lugare = JSON.parse(localStorage.getItem("lugares")) || [];
        setLugares(lugare);
    }, []);

    const eliminar = (id) => {
        const lugarelimnado = lugare.filter(lugar => lugar.id !== id)
        setLugares(lugarelimnado);
        localStorage.setItem("lugares", JSON.stringify(lugarelimnado));
        setFilaseleccionada(null);
    };    
    

    const seleccionfila = (row) => {
        setFilaseleccionada(row); 
      };
  return (
    <>
        <table className='table table-stripped'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Destino</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                
                {lugare && lugare.map((row) => (
                    <tr key={row.id} onClick={() => seleccionfila(row)}>
                        <td>{row.name}</td>
                        <td>{row.destino}</td>
                        <td>
                            <button className='btn btn-danger' onClick={() => eliminar(row.id)} >
                            Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
        {filaseleccionada ? (
          <div>
            <h2>Fila Seleccionada</h2>
            <p>Nombre: {filaseleccionada.name}</p>
            <p>Pais: {filaseleccionada.destino}</p>

          </div> ) : (
            <p>Seleccione una fila haciendo clic en ella.</p>
          )}
          </div>
    </>
  )
}

export default Ubicaciones