function seRompe() {
  return 3 + z;
}

function seRompeAsyn(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error("Error en mi funcion asincrona");
      cb(err);
    }
  });
}

try {
  //seRompe();
  seRompeAsyn(function (err) {
    console.log(err.message);
  });
} catch (error) {
  console.error("Entro al catch: ", error.message);
}

console.log("Va al final");
