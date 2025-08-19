function main() {
  // Declarar un array de objetos
  const arrayObjetos = [
    { texto: "pantalla", unNumero: 1 },
    { texto: "ratón", unNumero: 2 },
    { texto: "código", unNumero: 3 },
    { texto: "algoritmo", unNumero: 4 },
    { texto: "variable", unNumero: 5 },
    { texto: "evento", unNumero: 6 },
    { texto: "condición", unNumero: 7 },
    { texto: "función", unNumero: 8 },
    { texto: "objeto", unNumero: 9 },
    { texto: "array", unNumero: 10 },
    { texto: "bucle", unNumero: 11 },
    { texto: "servidor", unNumero: 12 },
    { texto: "cliente", unNumero: 13 },
    { texto: "depurar", unNumero: 14 },
    { texto: "navegador", unNumero: 15 },
    { texto: "error", unNumero: 16 },
    { texto: "javascript", unNumero: 17 },
    { texto: "html", unNumero: 18 },
    { texto: "css", unNumero: 19 },
    { texto: "base de datos", unNumero: 20 },
  ];

  // Llamar a la función que filtra los objetos pares
  const resultado = filtrarObjetosPares(arrayObjetos);

  // Mostrar el resultado por consola
  console.log(resultado);
}

function filtrarObjetosPares(array) {
  const resultado = [];

  // Recorrer el array de objetos
  for (let i = 0; i < array.length; i++) {
    const objeto = array[i];

    // Verificar si el número dentro del objeto es par
    if (objeto.unNumero % 2 === 0) {
      // Agregar el objeto al array resultado
      resultado.push(objeto);
    }
  }

  return resultado;
}
main();
