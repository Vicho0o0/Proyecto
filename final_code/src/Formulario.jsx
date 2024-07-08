import axios from "axios";
import React, { useEffect, useState } from "react";
import Ubicaciones from "./Ubicaciones";

const Formulario = () => {
    const url = "http://45.236.130.191/tours.php";
    const [lugares, setLugares] = useState([]);
    const [nombre, setNombre] = useState("");
    const [destino, setDestino] = useState("");

    useEffect(() => {
        const lugaresGuardados = JSON.parse(localStorage.getItem('lugares')) || [];
        if (lugaresGuardados.length > 0) {
            setLugares(lugaresGuardados);
        } else {
            axios.get(url).then(response => {setLugares(response.data); 
                    localStorage.setItem('lugares', JSON.stringify(response.data));
                })
                .catch(error => {
                    console.error('Error al obtener los datos de la API:', error);
                });
        }
    }, []); 

    useEffect(() => {
        localStorage.setItem('lugares', JSON.stringify(lugares));
    }, [lugares]);
    const guardar = () => {
        if (nombre.trim() == '' || destino.trim() == '') {
            alert('Hay datos faltantes');
            return;
        }

        const lugar = { id: lugares.length + 1, name: nombre, destino: destino };
        const nuevosLugares = [...lugares, lugar];
        setLugares(nuevosLugares);
        setNombre('');
        setDestino('');
    };

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className='col-6'>
                        <div className='col'>
                            <label htmlFor="name" className='form-label'>
                                Nombre
                            </label>
                            <input type="text" id='name' className='form-control' value={nombre} onChange={e => setNombre(e.target.value)} />
                        </div>
                        <div className='col'>
                            <label htmlFor="destino" className='form-label'>
                                Destino
                            </label>
                            <input type="text" id='destino' className='form-control' value={destino} onChange={e => setDestino(e.target.value)} />
                        </div>
                        <div className='col mt-3'>
                            <button className='btn btn-success' onClick={guardar}>Guardar</button>
                        </div>
                    </div>
                    <div className='col-6'>
                        <Ubicaciones lugares={lugares} setLugares={setLugares} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Formulario;
