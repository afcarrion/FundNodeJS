function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla");
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios, " + nombre1);
      resolve();
    }, 1000);
  });
}

// -----
console.log("Iniciando el proceso ....");
hola("Felipe")
  .then(hablar) //otra forma de llamar la funcion hablar por que solo hay una linea en el then
  .then(hablar) //otra forma de llamar la funcion hablar por que solo hay una linea en el then
  .then(hablar) //otra forma de llamar la funcion hablar por que solo hay una linea en el then
  .then((nombre) => {
    return adios(nombre);
  })
  .then((nombre) => {
    console.log("Terminado el proceso");
  })
  .catch((error) => {
    console.log("Ha habido un error");
    console.log(error);
  });
