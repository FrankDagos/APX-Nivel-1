const numeroDeMes = process.argv[2];

const informacionMensual = [
  {
    nombreDelMes: "Enero",
    cantidadDeDias: 31,
    eventoDelMes: "Año Nuevo",
  },
  {
    nombreDelMes: "Febrero",
    cantidadDeDias: 28,
    eventoDelMes: "Día de San Valentín",
  },
  {
    nombreDelMes: "Marzo",
    cantidadDeDias: 31,
    eventoDelMes: "Día de la Mujer",
  },
  {
    nombreDelMes: "Abril",
    cantidadDeDias: 30,
    eventoDelMes: "Día de la Tierra",
  },
  {
    nombreDelMes: "Mayo",
    cantidadDeDias: 31,
    eventoDelMes: "Día del Trabajador",
  },
  {
    nombreDelMes: "Junio",
    cantidadDeDias: 30,
    eventoDelMes: "Día del Padre",
  },
  {
    nombreDelMes: "Julio",
    cantidadDeDias: 31,
    eventoDelMes: "Memes de Julio",
  },
  {
    nombreDelMes: "Agosto",
    cantidadDeDias: 31,
    eventoDelMes: "Día del Niño",
  },
  {
    nombreDelMes: "Septiembre",
    cantidadDeDias: 30,
    eventoDelMes: "Día de la Primavera",
  },
  {
    nombreDelMes: "Octubre",
    cantidadDeDias: 31,
    eventoDelMes: "Halloween",
  },
  {
    nombreDelMes: "Noviembre",
    cantidadDeDias: 30,
    eventoDelMes: "Día de los Muertos",
  },
  {
    nombreDelMes: "Diciembre",
    cantidadDeDias: 31,
    eventoDelMes: "Navidad",
  },
];

const posicionEnElArray = process.argv[2] - 1;
const infoDelMes = informacionMensual[posicionEnElArray];

console.log("Numero de mes:", numeroDeMes);
console.log("Nombre del mes:", infoDelMes.nombreDelMes);
console.log("Cantidad de días:", infoDelMes.cantidadDeDias);
console.log("Evento del mes:", infoDelMes.eventoDelMes);
