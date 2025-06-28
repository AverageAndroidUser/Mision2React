import React from 'react'

export const Tarjeta = ({titulo, imagen, verMas}) => {
  return (
    <div className="card h-100 shadow-lg rounded-4">
        <div className="card-header bg-secondary text-white text-center" style={{fontWeight: 'bold'}}>
          {titulo}
        </div>
        <div className="card-body text-center overflow-hidden">
          <img className="img-flui" style={{ maxHeight: '400px', objectFit: 'contain' }} src = {imagen} alt="ImagenPrueba"/>
        </div>
        <div className="card-footer bg-white border-0 text-end">
          <button className="btn btn-outline-primary" onClick={verMas}>Ver más</button>
        </div>
    </div>
  )
}
