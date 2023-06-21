import akan from "./Akan.wav";
import amakua from "./Amakua.wav";
import atackaye from "./Atackaye.wav";
import buchinkonkue from "./Buchinkonkue.wav";
import chusuasi from "./Chusuasi.wav";
import niakonke from "./Ñiakonke.wav";
import uoksi from "./Uoksi.wav";
import yikanka from "./Yikanka.wav";

const colors = [buchinkonkue, akan, chusuasi, amakua, yikanka, uoksi, niakonke];

const soundColors = [];
for (let i = 0; i <= colors.length; i++) {
  const audio = new Audio(colors[i]);
  soundColors.push(audio);
}
export default function kankuamoColors() {
  return soundColors;
}
