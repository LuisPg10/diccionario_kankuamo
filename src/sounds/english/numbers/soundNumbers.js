import One from "./One.wav";
import Two from "./Two.wav";
import Three from "./Three.wav";
import Four from "./Four.wav";
import Five from "./Five.wav";
import Six from "./Six.wav";
import Seven from "./Seven.wav";
import eigth from "./eight.wav";
import Nine from "./Nine.wav";
import Ten from "./Ten.wav";

const colors = [One, Two, Three, Four, Five, Six, Seven, eigth, Nine, Ten];

const soundColors = [];
for (let i = 0; i <= colors.length; i++) {
  const audio = new Audio(colors[i]);
  soundColors.push(audio);
}
export default function englishColors() {
  return soundColors;
}
