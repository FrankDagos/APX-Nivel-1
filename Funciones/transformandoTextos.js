function transformarFrase(frase) {
  const fraseMayuscula = frase.map((palabra) => {
    const primeraLetra = palabra.charAt(0).toUpperCase();
    const restoPalabra = palabra.slice(1).toLowerCase();
    return primeraLetra + restoPalabra;
  });
  const oracion = fraseMayuscula.join(" ");
  return oracion;
}

function main() {
  const frase = ["La", "vida", "es", "como", "una", "caja", "de", "chocolates"];
  const oracionMayuscula = transformarFrase(frase);
  console.log(oracionMayuscula);
}

main();
