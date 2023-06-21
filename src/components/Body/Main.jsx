import "./View.css";
import Card from "../Card/Card";
import spider from "../../images/Animals.png";
import blue from "../../images/Colors.png";
import number from "../../images/numbers.png";
import body from "../../images/bodyparts.png";
import { useNavigate } from 'react-router-dom';

export default function Main() {
  //Para Los Eventos de Los Botones.
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h2> ¡ELIGE LA CATEGORÍA QUE DESEAS APRENDER!</h2>
      <div className="row row-cols-2 row-cols-md-4 g-0">
        <Card
          spanish={"Animales"}
          kankuamo={"Ingresar"}
          data={spider}
          styleInfo={{
            visibilityKankuamo: "visible",
            visibilityEnglish: "hidden",
            align: "center",
          }}
          onClick={() => handleClick('/Animales')}
        />
        <Card
          spanish={"Colores"}
          kankuamo={"Ingresar"}
          data={blue}
          styleInfo={{
            visibilityKankuamo: "visible",
            visibilityEnglish: "hidden",
            align: "center",
          }}
          onClick={() => handleClick('/Colores')}
        />
        <Card
          spanish={"Números"}
          kankuamo={"Ingresar"}
          data={number}
          styleInfo={{
            visibilityKankuamo: "visible",
            visibilityEnglish: "hidden",
            align: "center",
          }}
          onClick={() => handleClick('/Numeros')}
        />
        <Card
          spanish={"Partes del cuerpo"}
          kankuamo={"Ingresar"}
          data={body}
          styleInfo={{
            visibilityKankuamo: "visible",
            visibilityEnglish: "hidden",
            align: "center",
          }}
          onClick={() => handleClick('/Cuerpo')}
        />
      </div>
    </div>
  );
}
