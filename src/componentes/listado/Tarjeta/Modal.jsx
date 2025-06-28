import React from 'react'
import {Modal, Button} from 'react-bootstrap'

export const ModalPrueba = ({titulo, imagen, descripcion, show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="text-break">{descripcion}</p>
        <div className="text-center">
          <img
            src={imagen}
            alt="ImagenPrueba"
            className="img-fluid rounded mt-3"
            style={{ maxHeight: '70vh', objectFit: 'contain' }}
          />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
