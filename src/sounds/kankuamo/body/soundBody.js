import Bukukona from "./Bukukona.wav";
import Chokna from "./Chokna.wav";
import Chakuku from "./Chakuku.wav";
import Dukakana from "./Dukakana.wav";
import Ganakusa from "./Ganakusa.wav";
import Guna from "./Guna.wav";
import Gunakitna from "./Gunakitna.wav";
import inadguine from "./Inadguine.wav";
import Kumona from "./Kumona.wav";
import kuku from "./Kuku.wav";

const animals = [
  Bukukona,
  Chokna,
  Chakuku,
  Dukakana,
  Ganakusa,
  Guna,
  Gunakitna,
  inadguine,
  Kumona,
  kuku,
];

const soundsAnimals = [];
for (let i = 0; i <= animals.length; i++) {
  const audio = new Audio(animals[i]);
  soundsAnimals.push(audio);
}

export default function animalsEnglish() {
  return soundsAnimals;
}
