const ram = 16; // GB
const almacenamiento = 2; // TB
const nucleosCPU = 8; // núcleos
const velocidadCPU = 3.5; // GHz
const precio = 1200; // dólares

const esPotente = ram >= 8 && nucleosCPU >= 4;
const capacidad = almacenamiento >= 0.5 ? "Alta" : "Baja";
const tipoCPU = velocidadCPU > 3 ? "Rapida" : "Lenta";
const rangoPrecio = precio < 1000 ? "Asequible" : "Costosa";

console.log("¿Es potente?", esPotente);
console.log("Capacidad de almacenamiento:", capacidad);
console.log("Frecuencia de su CPU:", tipoCPU);
console.log("En temas de precio, la PC es:", rangoPrecio);

let esPotentedesc = "";

if (esPotente === true) {
  esPotentedesc = "potente";
} else {
  esPotentedesc = "básica";
}

const descripcion =
  "Esta computadora es " +
  esPotentedesc +
  ". Y además cuenta con una capacidad de almacenamiento que se puede considerar " +
  capacidad +
  ". Cuenta con un CPU de velocidad " +
  tipoCPU +
  " y de precio se podría definir como " +
  rangoPrecio;

console.log(descripcion);
