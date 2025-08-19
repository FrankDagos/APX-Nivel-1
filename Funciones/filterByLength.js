const arr = ["hola", "adios", "bienvenido", "chau"];
const filterByLength = (arr, n) => arr.filter((palabra) => palabra.length >= n);
console.log(filterByLength(arr, 5)); // debería imprimir ["adios", "bienvenido"]
