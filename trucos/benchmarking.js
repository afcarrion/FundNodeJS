let suma = 0;

console.time("Bucle");
for (let i = 0; i < 1000000000; i++) {
  suma += 1;
}
console.timeEnd("Bucle");

let suma2 = 0;

console.time("Bucle2");
for (let i = 0; i < 1000000000; i++) {
  suma2 += 1;
}
console.timeEnd("Bucle2");

function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Termina el proceso");
      resolve();
    }, 2000);
  });
}
console.time("Asincrono");
asincrona().then(() => {
  console.timeEnd("Asincrono");
});
