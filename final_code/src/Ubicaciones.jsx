import React, { useState, useEffect } from 'react';

const Ubicaciones = ({ lugares, setLugares }) => {
    const [filaseleccionada, setFilaseleccionada] = useState(null);
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        const lugaresGuardados = JSON.parse(localStorage.getItem('lugares')) || [];
        setLugares(lugaresGuardados);
    }, [setLugares]);

    const eliminar = (id) => {
        const lugareliminado = lugares.filter(lugar => lugar.id !== id);
        setLugares(lugareliminado);
        localStorage.setItem('lugares', JSON.stringify(lugareliminado));
        setFilaseleccionada(null);
    };

    const seleccionfila = (row) => {
        setFilaseleccionada(row);
    };

    const lugaresFiltrados = lugares.filter(lugar =>
        lugar.destino.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <>
            <input type='text' placeholder='Filtrar por destino' value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Destino</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {lugaresFiltrados.map((row) => (
                        <tr key={row.id} onClick={() => seleccionfila(row)}>
                            <td>{row.name}</td>
                            <td>{row.destino}</td>
                            <td>
                                <button className='btn btn-danger'
                                    onClick={() => eliminar(row.id)}>
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
    );
};

export default Ubicaciones;
