const palos = ["♥️", "♦️", "♣️", "♠️"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const mazo = [];
let indiceGeneral = 0;

for (let i = 0; i < palos.length; i++) {
  const palo = palos[i];

  // Acá tenés que usar otro for para recorrer
  // los valores y generar cada carta
  for (let i2 = 0; i2 < valores.length; i2++) {
    const valor = valores[i2];
    mazo[indiceGeneral] = `${valor} de ${palo}`;
    indiceGeneral++;
  }
}

console.log(mazo);
