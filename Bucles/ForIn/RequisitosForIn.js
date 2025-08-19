const requisitos = ["javascript", "react"];

const usuario = {
  habilidades: ["javascript", "react", "typescript"],
};

// Inicializamos la variable 'cumpleTodos' en true
let cumpleTodos = true;

// Recorremos cada requisito
for (const r in requisitos) {
  const requisito = requisitos[r];

  let encontrado = false; // Inicializamos 'encontrado' en false

  // Recorremos las habilidades del usuario
  for (const i in usuario.habilidades) {
    // Comparamos cada habilidad con el requisito
    if (usuario.habilidades[i] === requisito) {
      encontrado = true; // Marcamos como encontrado si hay coincidencia
    }
  }

  // Si no encontramos el requisito, cambiamos 'cumpleTodos' a false
  if (!encontrado) {
    cumpleTodos = false;
  }
}

// Resultado final
if (cumpleTodos) {
  console.log("El usuario cumple con todos los requisitos");
} else {
  console.log("El usuario no cumple con todos los requisitos");
}
