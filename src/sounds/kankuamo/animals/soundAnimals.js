import bunolina from "./Bunolina.wav";
import chimu from "./Chimu.wav";
import chorma from "./Churma.wav";
import dihguaka from "./Diguaka.wav";
import dolmnyare from "./Dolminyare.wav";
import dumake from "./Dumake.wav";
import dunga from "./Dunga.wav";
import faki from "./Faki.wav";
import gamusuri from "./Gamusuri.wav";
import gongo from "./Gongo.wav";
import guardatinanja from "./Guardatinaja.wav";
import guenazo from "./Guenazo.wav";
import ji from "./Ji.wav";
import kandurano from "./kandurano.wav";
import kuchua from "./Kuchua.wav";
import kuldumaka from "./Kuldumaka.wav";
import lobo from "./Lobo.wav";
import manchandanda from "./Manchandanda.wav";
import mancua from "./Mancua.wav";
import misi from "./Misi.wav";
import muetsu from "./Muetsu.wav";
import sikuiri from "./Sikuiri.wav";
import sincabe from "./Sincabe.wav";
import tukua from "./Tukua.wav";
import zarma from "./Zarma.wav";

const animals = [
  bunolina,
  chimu,
  chorma,
  dihguaka,
  dolmnyare,
  dumake,
  dunga,
  faki,
  gamusuri,
  gongo,
  //guardatinanja,
  guenazo,
  ji,
  kandurano,
  kuchua,
  kuldumaka,
  lobo,
  manchandanda,
  mancua,
  misi,
  muetsu,
  zarma,
  sincabe,
  tukua,
  //sikuiri,
];

const soundsAnimals = [];
for (let i = 0; i <= animals.length; i++) {
  const audio = new Audio(animals[i]);
  soundsAnimals.push(audio);
}
export default function animalsKankuamo() {
  return soundsAnimals;
}
