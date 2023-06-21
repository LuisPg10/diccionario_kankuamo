import "./View.css";
import Card from "../Card/Card";
import spider from "../../images/Animals.png";
import blue from "../../images/Colors.png";
import number from "../../images/numbers.png";
import body from "../../images/bodyparts.png";

export default function Main() {
  return (
    <div>
      <h2> ¡ELIGE LA CATEGORÍA QUE DESEAS APRENDER!</h2>
      <div className="row row-cols-2 row-cols-md-4 g-0">
        <Card
          spanish={"Animales"}
          data={spider}
          styleInfo={{
            visibility: "hidden",
            align: "center",
          }}
        />
        <Card
          spanish={"Colores"}
          data={blue}
          styleInfo={{
            visibility: "hidden",
            align: "center",
          }}
        />
        <Card
          spanish={"Números"}
          data={number}
          styleInfo={{
            visibility: "hidden",
            align: "center",
          }}
        />
        <Card
          spanish={"Partes del cuerpo"}
          data={body}
          styleInfo={{
            visibility: "hidden",
            align: "center",
          }}
        />
      </div>
    </div>
  );
}
