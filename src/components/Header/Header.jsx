import logo from "../../images/Logo.png";
import NavBar from "./NavBar";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header-Container">
      <div className="Form-Navbar">
        {/* Imagen del Logo */}
        <img
          className="Logo"
          src={logo}
          width="200px"
          heigth="200px"
          alt="Logo dictionary"
        />

        <h1 className="Title-Header">Diccionario kankuamo</h1>
        {/* NavBar */}
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <NavBar />
          </div>
        </nav>
      </div>
    </div>
  );
}
