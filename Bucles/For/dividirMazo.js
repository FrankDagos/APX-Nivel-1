const mazoCompleto = [
  "A de ♥️",
  "2 de ♥️",
  "3 de ♥️",
  "4 de ♥️",
  "5 de ♥️",
  "6 de ♥️",
  "7 de ♥️",
  "8 de ♥️",
  "9 de ♥️",
  "10 de ♥️",
  "J de ♥️",
  "Q de ♥️",
  "K de ♥️",
  "A de ♦️",
  "2 de ♦️",
  "3 de ♦️",
  "4 de ♦️",
  "5 de ♦️",
  "6 de ♦️",
  "7 de ♦️",
  "8 de ♦️",
  "9 de ♦️",
  "10 de ♦️",
  "J de ♦️",
  "Q de ♦️",
  "K de ♦️",
  "A de ♣️",
  "2 de ♣️",
  "3 de ♣️",
  "4 de ♣️",
  "5 de ♣️",
  "6 de ♣️",
  "7 de ♣️",
  "8 de ♣️",
  "9 de ♣️",
  "10 de ♣️",
  "J de ♣️",
  "Q de ♣️",
  "K de ♣️",
  "A de ♠️",
  "2 de ♠️",
  "3 de ♠️",
  "4 de ♠️",
  "5 de ♠️",
  "6 de ♠️",
  "7 de ♠️",
  "8 de ♠️",
  "9 de ♠️",
  "10 de ♠️",
  "J de ♠️",
  "Q de ♠️",
  "K de ♠️",
];

// esto nos indica en que orden están las cartas en el mazo completo
const palos = ["corazones", "diamantes", "treboles", "picas"];

let mazo = new Array(52);
let index = 0;

const mazoPorPalo = {};

for (let i = 0; i < palos.length; i++) {
  const nombreDelPalo = palos[i];
  mazoPorPalo[nombreDelPalo] = [];

  for (let i2 = 0; i2 < 13; i2++) {
    mazoPorPalo[nombreDelPalo][i2] = mazoCompleto[index];
    index++;
  }
}

console.log(mazoPorPalo);
