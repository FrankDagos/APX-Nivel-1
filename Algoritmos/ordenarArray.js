
function ordernarElArray(arrayOriginal){
  const arrayOrdenado = [...arrayOriginal]; // Copiamos el array original
  let n = arrayOrdenado.length;
  let intercambiado;

  do {
    intercambiado = false;
    for (let i = 0; i < n - 1; i++) {
      if (arrayOrdenado[i] > arrayOrdenado[i + 1]) {
        [arrayOrdenado[i], arrayOrdenado[i + 1]] = [arrayOrdenado[i + 1], arrayOrdenado[i]];
        intercambiado = true;
      }
    }
    n--;
  } while (intercambiado);

  return arrayOrdenado;
}

const arrayOriginal = [];
for (let i = 0; i < 40; i++) {
  arrayOriginal.push(Math.floor(Math.random() * 10000) + 1); // Generamos números del 1 al 10000
}

const arrayOrdenado = ordernarElArray(arrayOriginal);

console.log(arrayOrdenado);
// usá función ordenarElArray para ordenar tu nuevo array