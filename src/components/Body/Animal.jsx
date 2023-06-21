import Card from "../Card/Card";
import "./View.css";
import Animals from "../../images/animals/animals";
import animalsKankuamo from "../../sounds/kankuamo/animals/soundAnimals";
import animalsEnglish from "../../sounds/english/animals/soundAnimals";

export default function Color() {
  let cards = [];
  const spanishInfo = [
    //"Grillo",
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
    "Luciernaga",
    "Ratón",
    "Mariposa",
  ];
  const kankuamoInfo = [
    //"Bokokono",
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
    "Sinkábe",
    "Tuhkua",
    "Ulsakúbi",
  ];
  const englishInfo = [
    //"Cricket",
    "Wasp",
    "Pig",
    "Dog",
    "Sardine",
    "Ant",
    "Lion",
    "Bat",
    "Scorpion",
    "Hen",
    "Black ant",
    "Guartinaja",
    "Buzzard",
    "Worn",
    "Termite",
    "Deer",
    "Squirrel",
    "Lizard",
    "Strength",
    "Spider",
    "Cat",
    "Flea",
    "Fox",
    "Firefly",
    "Mouse",
    "Butterfly",
  ];

  for (let i = 0; i < 24; i++) {
    cards.push(
      <Card
        data={Animals()[i]}
        spanish={spanishInfo[i]}
        kankuamo={kankuamoInfo[i]}
        english={englishInfo[i]}
        styleInfo={{ visibility: "visible", position: "between" }}
        soundKankuamo={animalsKankuamo()[i]}
        soundEnglish={animalsEnglish()[i]}
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
