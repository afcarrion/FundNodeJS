function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla");
    callbackHablar();
  }, 1000);
}

function adios(nombre1, miOtroCallback) {
  setTimeout(() => {
    console.log("Adios, " + nombre1);
    miOtroCallback();
  }, 1000);
}

console.log("Inicie el proceso");
hola("Felipe", (nombre1) => {
  hablar(function () {
    hablar(function () {
      hablar(function () {
        adios(nombre1, () => {
          console.log("Finalice el proceso");
        });
      });
    });
  });
});
