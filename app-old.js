import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
import crearArchivo from "./helpers/multiplicar.js";
const argv = yargs(hideBin(process.argv)).argv

console.clear();

//Primeros pasos de explicacion de consola
// const base = 12;
// const [ , , arg3 = 'base=1'] = process.argv;
//Con el comma omite el "base"
// const [, base = 1] = arg3.split('=');

// console.log(base);

// crearArchivo(base)
//   .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
//   .catch(err => console.log(err));


console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.base);