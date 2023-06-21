import wasp from "./Wasp.wav";
import pig from "./Pig.wav";
import dog from "./Dog.wav";
import sardine from "./Sardine.wav";
import ant from "./Ant.wav";
import lion from "./Lion.wav";
import bat from "./Bat.wav";
import scorpion from "./Scorpion.wav";
import hen from "./Hen.wav";
import blackAnt from "./Black ant.wav";
import guartinaja from "../../kankuamo/animals/Guardatinaja.wav";
import buzzard from "./Buzzard.wav";
import worn from "./Worn.wav";
import termite from "./Termite.wav";
import deer from "./Deer.wav";
import squirrel from "./Squirrel.wav";
import lizard from "./Lizard.wav";
import cat from "./Cat.wav";
import flea from "./Flea.wav";
import mouse from "./Mouse.wav";
import fox from "./Fox.wav";
import spider from "./Spider.wav";
import strength from "./Strength.wav";
import firefly from "./FireFly.wav";

const animals = [
  wasp,
  pig,
  dog,
  sardine,
  ant,
  lion,
  bat,
  scorpion,
  hen,
  blackAnt,
  guartinaja,
  buzzard,
  worn,
  termite,
  deer,
  squirrel,
  lizard,
  strength,
  spider,
  cat,
  flea,
  fox,
  firefly,
  mouse,
];

const soundsAnimals = [];
for (let i = 0; i <= animals.length; i++) {
  const audio = new Audio(animals[i]);
  soundsAnimals.push(audio);
}
export default function animalsEnglish() {
  return soundsAnimals;
}
