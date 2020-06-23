const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

const readableStream = fs.createReadStream(__dirname + "/input.txt");
readableStream.setEncoding("UTF8");

readableStream.on("data", function (chunk) {
  data += chunk;
});

readableStream.on("end", function () {
  console.log(data);
});

process.stdout.write("hola, que tal");

const transform = stream.Transform;

function Mayus() {
  transform.call(this);
}
util.inherits(Mayus, transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayus = new Mayus();
readableStream.pipe(mayus).pipe(process.stdout);
