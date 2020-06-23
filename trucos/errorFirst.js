function Asincrona(callBack) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callBack(null, a);
    } catch (error) {
      callBack(error);
    }
  }, 2000);
}

Asincrona(function (err, dato) {
  if (err) {
    console.error("Tenemos un error");
    console.error(err);
    return false;
    //throw err; No funciona en funciones asyncronas
  }
  console.log("Todo ha ido bien", dato);
});
