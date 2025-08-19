const usuarios = [
  { nombre: "Juan", habilidades: ["javascript", "react"] },
  { nombre: "María", habilidades: ["typescript", "react", "next.js"] },
  { nombre: "Lucas", habilidades: [] },
  { nombre: "Ana", habilidades: ["inglés", "javascript"] },
  { nombre: "Sofía", habilidades: ["typescript", "react"] },
  { nombre: "Martín", habilidades: ["react", "next.js"] },
  { nombre: "Julián", habilidades: ["javascript", "typescript"] },
  { nombre: "Lucía", habilidades: ["inglés", "react"] },
  { nombre: "Ezequiel", habilidades: ["typescript", "react"] },
];

const aviso = {
  compania: "TechFlow",
  texto:
    "Buscamos desarrolladores para unirse a nuestra startup de tecnología innovadora.",
  requisitos: ["typescript", "react"],
};

const candidatos = [];
let indiceCumpleRequisitos = 0;

for (const index in usuarios) {
  const usuario = usuarios[index];

  let cumpleTodosLosRequisitos = true;

  for (const requisito of aviso.requisitos) {
    // chequeo los requisitos del aviso
    // si el usuario no cumple alguno de ellos,
    // cumpleTodosLosRequisitos se vuelve false
    if (usuario.habilidades !== requisito) {
      cumpleTodos === false;
    }
  }

  if (cumpleTodosLosRequisitos) {
    // agrego al usuario al array de candidatos
    candidatos[indiceCumpleRequisitos] = usuario.nombre;
  }
}

console.log(candidatos);
