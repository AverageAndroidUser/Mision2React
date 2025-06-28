import { useState } from "react";
import { Tarjeta } from "./Tarjeta/Tarjeta";
import { ModalPrueba } from "./Tarjeta/Modal";

export default function Pruebas(){
  const [mostrarModal, setMostrarModal] = useState(false);
  const [pruebaActual, setPruebaActual] = useState(null);

  const abrirModal = (prueba) => {
    setPruebaActual(prueba);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setPruebaActual(null);
  };

  const listaPruebas = [
    {
      Titulo: "Insert Usuario",
      Imagen: "https://res.cloudinary.com/dpuixn4lq/image/upload/v1751119933/54fa1530-0a5a-4cec-bb30-cf5cad14eee5.png",
      Descripcion: "Inserción de 10 datos en la tabla Usuario. "
    },
    {
      Titulo: "Update Usuario",
      Imagen: "https://res.cloudinary.com/dpuixn4lq/image/upload/v1751120150/53438d4b-616a-4a56-822a-50d07d3b196a.png",
      Descripcion: "Actualización de los datos del registro con ID 21 de la tabla Usuario."
    },
    {
      Titulo: "Delete IEGreso",
      Imagen: "https://res.cloudinary.com/dpuixn4lq/image/upload/v1751120751/f69fb53f-55c7-4cef-8585-0e262aa06a0d.png",
      Descripcion: "Se elimina el registro con el ID 21 de la tabla Usuario."
    }
  ];
  return (
    <div className="container py-4 px-3">
      <h2 className="text-center">IEGresos</h2>
      <h3 className="text-center">Pruebas</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {listaPruebas.map((i, index) => (
          <div key={index}>
            <Tarjeta titulo={i.Titulo} imagen={i.Imagen} verMas={() => abrirModal(i)} />
          </div>
        ))}
      </div>
      {pruebaActual && (
        <ModalPrueba
          show={mostrarModal}
          handleClose={cerrarModal}
          titulo={pruebaActual.Titulo}
          descripcion={pruebaActual.Descripcion}
          imagen={pruebaActual.Imagen}
        />
      )}
    </div>
  )
}
