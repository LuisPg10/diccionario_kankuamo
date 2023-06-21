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
        <Route path="/diccionario_kankuamo" element={<Main />}></Route>
        <Route path="/diccionario_kankuamo/animals" element={<Animal />}></Route>
        <Route path="/diccionario_kankuamo/colors" element={<Color />}></Route>
        <Route path="/diccionario_kankuamo/numbers" element={<Number />}></Route>
        <Route path="/diccionario_kankuamo/body" element={<Body />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
