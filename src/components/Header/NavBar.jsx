import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className=" animate-text nav-link active" to="/diccionario_kankuamo">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link className=" animate-text nav-link active" to="/diccionario_kankuamo/animals">
            Animales
          </Link>
        </li>
        <li className="nav-item">
          <Link className=" animate-text nav-link active" to="/diccionario_kankuamo/colors">
            Colores
          </Link>
        </li>
        <li className="nav-item">
          <Link className=" animate-text nav-link active" to="/diccionario_kankuamo/numbers">
            Números
          </Link>
        </li>
        <li className="nav-item">
          <Link className=" animate-text nav-link active" to="/diccionario_kankuamo/body">
            Partes del Cuerpo
          </Link>
        </li>
      </ul>
    </nav>
  );
}
