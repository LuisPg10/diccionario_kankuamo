import Card from "../Card/Card";
import "./View.css";
import Images from "../../images/colors/colors.js";
import kankuamoColors from "../../sounds/kankuamo/colors/soundColors";
import englishColors from "../../sounds/english/colors/soundColors";

export default function Color() {
  let cards = [];

  const spanishInfo = [
    "Blanco",
    "Amarillo",
    "Azul",
    "Rojo",
    "Anaranjado",
    "Morado",
    "Negro",
    "Verde",
  ];
  const kankuamoInfo = [
    "Bunchikönke",
    "Akänl",
    "Chusuasi",
    "Amakua",
    "Yikanka",
    "Uözi",
    "Niakönke",
    "Atahkáye",
  ];
  const englishInfo = [
    "White",
    "Yellow",
    "Blue",
    "Red",
    "Orange",
    "Purple",
    "Black",
    "Green",
  ];

  for (let i = 0; i < 7; i++) {
    cards.push(
      <Card
        data={Images()[i]}
        spanish={spanishInfo[i]}
        kankuamo={kankuamoInfo[i]}
        english={englishInfo[i]}
        styleInfo={{ visibility: "visible", position: "between" }}
        soundKankuamo={kankuamoColors()[i]}
        soundEnglish={englishColors()[i]}
      />
    );
  }
  return (
    <>
      {/* Titulo de la vista  */}
      <h1 className="mt-auto">COLORES</h1>

      {/*Cartas de colores*/}
      <div className="row row-cols-2 row-cols-md-4 g-0">{cards}</div>
    </>
  );
}
