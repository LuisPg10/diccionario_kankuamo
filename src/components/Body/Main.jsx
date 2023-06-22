import "./View.css";
import Card from "../Card/Card";
import spider from "../../images/Animals.png";
import blue from "../../images/Colors.png";
import number from "../../images/numbers.png";
import body from "../../images/bodyparts.png";
import { Link } from 'react-router-dom';

export default function Main() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h2> ¡ELIGE LA CATEGORÍA QUE DESEAS APRENDER!</h2>
      <div className="row row-cols-2 row-cols-md-4 g-0">


        <Link to={'/diccionario_kankuamo/animals'} className="card link-style" onClick={handleClick} >
          <Card
            spanish={"Animales"}
            kankuamo={"Ingresar"}
            data={spider}
            styleInfo={{
              visibilityKankuamo: "hidden",
              visibilityEnglish: "hidden",
              align: "center",
            }}
          />
        </Link>

        <Link to={'/diccionario_kankuamo/colors'} className="card link-style" onClick={handleClick} >
          <Card
            spanish={"Colores"}
            kankuamo={"Ingresar"}
            data={blue}
            styleInfo={{
              visibilityKankuamo: "hidden",
              visibilityEnglish: "hidden",
              align: "center",
            }}
          />
        </Link>

        <Link to={'/diccionario_kankuamo/numbers'} className="card link-style" onClick={handleClick} >
          <Card
            spanish={"Números"}
            kankuamo={"Ingresar"}
            data={number}
            styleInfo={{
              visibilityKankuamo: "hidden",
              visibilityEnglish: "hidden",
              align: "center",
            }}
            onClick={() => handleClick('/Numeros')}
          />
        </Link>

        <Link to={'/diccionario_kankuamo/body'} className="card link-style" onClick={handleClick} >
          <Card
            spanish={"Partes del cuerpo"}
            kankuamo={"Ingresar"}
            data={body}
            styleInfo={{
              visibilityKankuamo: "hidden",
              visibilityEnglish: "hidden",
              align: "center",
            }}
          />
        </Link>
      </div>
    </div >
  );
}
