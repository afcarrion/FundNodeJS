process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});

process.on("exit", () => {
  console.log("Ale, el proceso se acabo");
});

process.on("uncaughtException", (err, origen) => {
  console.log("Olvidamos capturar un error");
  console.error(err);
});

//funcionQueNoexiste();

console.log("asdasd");
