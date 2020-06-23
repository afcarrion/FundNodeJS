const os = require("os");

console.log(os.arch());

console.log(os.platform());

console.log(os.cpus());

//Errores  y señales del sistema
console.log(os.constants);

//Memoria
console.log(os.freemem());

const SIZE = 1024;

function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));

//directorio raiz de los datos
console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());
