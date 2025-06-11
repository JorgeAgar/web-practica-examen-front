import { useState, useEffect } from "react";
import api from "../api/api";

const getTalleres = async () => {
  return await api.getTalleres();
};

export default function Talleres() {
  const [talleres, setTalleres] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    const talleres = getTalleres();
    setTalleres(talleres);
  }, []);

  return (
    <>
      <nav className="talleres-nav">
        <ul>
          {talleres.map((taller) => (
            <li key={taller.id} onClick={() => setSeleccionado(taller)}>
              {taller.nombre}
            </li>
          ))}
        </ul>
      </nav>
      <div className="taller-details">
        {seleccionado ? (
          <div>
            <h1 className="taller-nombre">{seleccionado.nombre}</h1>
            <p className="taller-descripcion">{seleccionado.descripcion}</p>
          </div>
        ) : (
          <p className="taller-noseleccionado">Selecciona un elemento para ver los detalles.</p>
        )}
      </div>
    </>
  );
}
