import "../styles/Admin.css";

import { useState } from "react";
import Talleres from "./Talleres.jsx";

export default function Admin() {
  const [element, setElement] = useState(<Talleres></Talleres>);

  return (
    <>
      <nav className="admin-nav">
        <ul>
          <li onClick={() => setElement(<Talleres></Talleres>)}>Talleres</li>
          <li>Programaciones</li>
          <li>Instructores</li>
          <li>Tipos de Documento</li>
          <li>Inscripciones</li>
          <li>Participantes</li>
          <li>Evidencias</li>
          <li>Colegios</li>
          <li>Ubicaciones</li>
          <li>Asistentes</li>
          <li>Sesiones</li>
          <li>Municipios</li>
        </ul>
      </nav>
      <div className="admin-content">
        {element}
      </div>
    </>
  );
}
