import black from "./Black.wav";
import blue from "./Blue.wav";
import green from "./Green.wav";
import red from "./Red.wav";
import orange from "./Orange.wav";
import purple from "./Purple.wav";
import white from "./White.wav";
import yellow from "./Yellow.wav";
//import yikanka from "./Yikanka.wav";

const colors = [white, yellow, blue, red, orange, purple, black, green];

const soundColors = [];
for (let i = 0; i <= colors.length; i++) {
  const audio = new Audio(colors[i]);
  soundColors.push(audio);
}
export default function englishColors() {
  return soundColors;
}
