async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla");
      resolve(nombre);
    }, 1000);
  });
}

async function adios(nombre1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios, " + nombre1);
      resolve();
    }, 1000);
  });
}

// -----

async function main() {
  let nombre = await hola("Felipe");
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Terminamos el proceso");
}

console.log("Empezamos el proceso");
main();
