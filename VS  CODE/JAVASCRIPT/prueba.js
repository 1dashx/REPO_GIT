console.log("Hello, World!");
console.log("Prueba de sincronización");

function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("David"));

const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((total, n) => total + n, 0);
console.log("La suma es:", suma);