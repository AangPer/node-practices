import argv from "./config/yargs.js";
import crearArchivo from "./helpers/multiplicar.js";
import colors from 'colors';

console.clear();
// console.log("La l", argv.l);

crearArchivo({base:argv.b, limite: argv.n, listar:argv.l})
  .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
  .catch(err => console.log(err));


// console.log(process.argv);
console.log(argv);
// console.log('base: yargs', argv.b);