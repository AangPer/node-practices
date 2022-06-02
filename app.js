import argv from "./config/yargs.js";
import crearArchivo from "./helpers/multiplicar.js";

console.clear();

crearArchivo({base:argv.b, limite: argv.n, listar:argv.l})
  .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
  .catch(err => console.log(err));

console.log(argv);