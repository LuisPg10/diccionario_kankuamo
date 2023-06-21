import Knee from "./Knee.wav";
import Skull from "./Skull.wav";
import Head from "./Head.wav";
import Leg from "./Leg.wav";
import Nape from "./Nape.wav";
import Hand from "./Hand.wav";
import Nail from "./Nail.wav";
import Hair from "./hair.wav";
import Teeth from "./Teeth.wav";

const animals = [Knee, Skull, Head, Leg, Nape, Hand, Nail, Hair, Teeth, Teeth];

const soundsAnimals = [];
for (let i = 0; i <= animals.length; i++) {
  const audio = new Audio(animals[i]);
  soundsAnimals.push(audio);
}

export default function animalsEnglish() {
  return soundsAnimals;
}
