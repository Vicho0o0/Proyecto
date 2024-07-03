import React from 'react'

const Ubicaciones = ({lugare}) => {
  return (
    <>
        <table className='table table-stripped'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Destino</th>
                </tr>
            </thead>
            <tbody>
                {lugare.map(l => (
                    <tr>
                        <td>{l.name}</td>
                        <td>{l.destino}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default Ubicaciones