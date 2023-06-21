import Main from "./components/Body/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import {
  Route,
  Routes,
} from "react-router-dom";

import Animal from "./components/Body/Animal";
import Color from "./components/Body/Color";
import Number from "./components/Body/Number";
import Body from "./components/Body/Body";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Cada una de las rutas a cada Vista del Programa */}
        <Route path="/" element={<Main />}></Route>
        <Route path="/Animales" element={<Animal />}></Route>
        <Route path="/Colores" element={<Color />}></Route>
        <Route path="/Numeros" element={<Number />}></Route>
        <Route path="/Cuerpo" element={<Body />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
