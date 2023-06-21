import Ijkua from "./Ijkua.wav";
import Moga from "./Moga.wav";
import Mewa from "./Mewa.wav";
import Machiwa from "./Machiwa.wav";
import Achigwua from "./Achigwua.wav";
import Chingua from "./Chingua.wav";
import Kudga from "./Kudga.wav";
import Ambiwua from "./Ambiwua.wav";
import Ikagua from "./Ikagua.wav";
import Ugwa from "./Ugwa.wav";

const colors = [
  Ijkua,
  Moga,
  Mewa,
  Machiwa,
  Achigwua,
  Chingua,
  Kudga,
  Ambiwua,
  Ikagua,
  Ugwa,
];

const soundColors = [];
for (let i = 0; i <= colors.length; i++) {
  const audio = new Audio(colors[i]);
  soundColors.push(audio);
}

export default function englishColors() {
  return soundColors;
}
