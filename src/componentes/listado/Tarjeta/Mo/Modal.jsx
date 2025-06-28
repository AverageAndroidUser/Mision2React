import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './ModalPrueba.module.css';

export const ModalPrueba = ({ titulo, imagen, descripcion, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="xl" centered className={styles.modal}>
      <Modal.Header closeButton className={styles.header}>
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>

      <Modal.Body className={styles.body}>
        <p className={styles.description}>{descripcion}</p>
        <div className="text-center">
          <img
            src={imagen}
            alt="ImagenPrueba"
            className={`${styles.image} img-fluid rounded mt-3`}
          />
        </div>
      </Modal.Body>

      <Modal.Footer className={styles.footer}>
        <Button variant="secondary" className={styles.closeButton} onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

