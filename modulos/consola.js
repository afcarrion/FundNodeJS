console.error("Error");

var tabla = [
  {
    a: 1,
    b: "A",
  },
  {
    a: 2,
    b: "Otra",
    c: true,
  },
];

console.table(tabla);

console.log("Conversación");
console.group("Conver");
console.log("Hola");
console.log("Bla bla Bla");
console.log("Adios");
console.groupEnd("Conver");
console.log("Otra cosa");

/* Contador */

console.count("Veces");
console.count("Veces");
console.count("Vecess");
console.countReset("Veces");
console.count("Vecees");
