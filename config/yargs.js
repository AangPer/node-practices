import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    describe: "Toma la base de la tabla de multiplicar",
    demandOption: true, //isRequired
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    describe:"Muestra la tabla creada",
    default: false,
  })
  .option("n", {
    alias: "limite",
    type: "number",
    describe:"Define hasta que numero se multiplicara la base",
  })
  .check((argv, options) => {
    // console.log('yargs', argv);
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

  export default argv;