const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva peticion");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola, que tal");
      res.end;
      break;
    default:
      res.write("Error 404, no se a donde vas");
      res.end;
  }
  //Creando una cabecera
  /*  res.writeHead(201, { "Content-Type": "text/plain" });
  //Escribir respuesta al usuario
  res.write("Hola, ya se usar http de NodeJS");
  res.end(); */
}

console.log("Escuchando http en el puerto 3000");
