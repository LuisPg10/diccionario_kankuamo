import Card from "../Card/Card";
import "./View.css";
import Animals from "../../images/animals/animals";

export default function Color() {
  let cards = [];
  const spanishInfo = [
    "Grillo",
    "Avispa",
    "Cerdo",
    "Perro",
    "Sardina",
    "Hormiga",
    "León",
    "Murcielago",
    "Alacrán",
    "Gallina",
    "Hormiga negra",
    "Guartinaja",
    "Gallinazo",
    "Gusano",
    "Comejen",
    "Venado",
    "Ardilla",
    "Lagartija",
    "Ñeque",
    "Araña",
    "Gato",
    "Pulga",
    "Zorra",
    "Ñeque",
    "Luciernaga",
    "Ratón",
    "Mariposa",
  ];
  const kankuamoInfo = [
    "Bokokono",
    "Bunolina",
    "Chimu",
    "Chörma",
    "Dihguaka",
    "Dolmnyare",
    "Dumake",
    "Dünga",
    "Faki",
    "Gamüsuri",
    "Gongo",
    "Guara",
    "Guenazo",
    "Ji",
    "Kandurano",
    "Kuhchúar",
    "Kuldumaka",
    "Lobo",
    "Manchangala",
    "Mankua",
    "Misi",
    "Möechcjl",
    "Sarma",
    "Manchangala",
    "Sinkábe",
    "Tuhkua",
    "Ulsakúbi",
  ];
  const englishInfo = [
    "Cricket",
    "Wasp",
    "Pig",
    "Dog",
    "Sardine",
    "Ant",
    "Lion",
    "Bat",
    "Scorpion",
    "Hen",
    "Gongo",
    "Guartinaja",
    "Buzzard",
    "Worn",
    "Termite",
    "Deer",
    "Squirrel",
    "Lizard",
    "Ñeque",
    "Spider",
    "Cat",
    "Flea",
    "Fox",
    "Ñeque",
    "Firefly",
    "Mouse",
    "Butterfly",
  ];

  for (let i = 0; i < 27; i++) {
    cards.push(
      <Card
        data={Animals()[i]}
        spanish={spanishInfo[i]}
        kankuamo={kankuamoInfo[i]}
        english={englishInfo[i]}
        styleInfo={{ visibility: "visible", position: "between" }}
      />
    );
  }

  return (
    <>
      {/* Titulo de la vista  */}
      <h1 className="mt-auto">ANIMALES</h1>
      {/*Cartas de colores*/}
      <div className="row row-cols-2 row-cols-md-4 g-0">{cards}</div>
    </>
  );
}
