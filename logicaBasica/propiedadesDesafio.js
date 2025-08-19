const propiedad = {
  id: 40003,
  titulo: "Departamento premium con vista al río",
  descripcion: "Departamento amplio y luminoso con balcón y vista panorámica.",
  tipo: "departamento",
  precio: 950,
  ubicacion: {
    direccion: "Av. Libertador 1500",
    ciudad: "Buenos Aires",
    provincia: "Buenos Aires",
    pais: "Argentina",
    codigoPostal: "C1425",
  },
  superficie: 90, // Más de 80 m²
  habitaciones: 3, // Mínimo 2 habitaciones
  banos: 2,
  amenities: ["Gimnasio", "Piscina", "SUM"],
  servicios: ["Luz", "Gas", "Agua", "Internet"],
  propietario: {
    nombre: "Javier Rodríguez",
    telefono: "+54 9 11 3333-4444",
    email: "javier@example.com",
  },
  diasPublicado: 5, // Menos de 7 días
  visitas: 150,
  destacado: true,
};

const esDepa = propiedad.tipo === "departamento";
const precioMax = propiedad.precio <= 1000;
const minHabitacion = propiedad.habitaciones >= 2;
const minSuperficie = propiedad.superficie > 80;
const diasPublicadoMin = propiedad.diasPublicado < 7;

if (esDepa && precioMax && minHabitacion) {
  console.log("Esta propiedad cumple con todas las condiciones");
  if (minSuperficie && diasPublicadoMin) {
    console.log("Hay que contactar a esta propiedad lo antes posible");
  }
} else {
  console.log("Esta propiedad no cumple con todas las condiciones");
}
