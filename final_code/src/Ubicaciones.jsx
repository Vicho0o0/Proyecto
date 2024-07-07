import React, {useState, useEffect} from 'react'

const Ubicaciones = ({lugares, setLugares}) => {
    const [filaseleccionada, setFilaseleccionada] = useState (null);

    useEffect(() => {
        const lugaresGuardados = JSON.parse(localStorage.getItem("lugares")) || [];
        setLugares(lugaresGuardados);
    }, [setLugares]);


    const eliminar = (id) => {
        const lugarelimnado = lugares.filter(lugar => lugar.id !== id)
        setLugares(lugarelimnado);
        localStorage.setItem("lugares", JSON.stringify(lugarelimnado));
        setFilaseleccionada(null);
    };    
    

    const seleccionfila = (row) => {
        setFilaseleccionada(row)
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
                {lugares.map((row) => (
                    <tr key={row.id} onClick={() => seleccionfila(row)}>
                        <td>{row.name}</td>
                        <td>{row.destino}</td>
                        <td>
                            <button className='btn btn-danger' 
                            onClick={() => eliminar(row.id)} >
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
                </div> 
            ) : (
                <p>Seleccione una fila haciendo clic en ella.</p>
            )}
          </div>
    </>
  )
}

export default Ubicaciones

