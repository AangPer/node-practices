import { writeFileSync, mkdir } from "fs";
import colors from "colors";

const crearArchivo = async ({ base = 1, listar = false, limite = 10 }) => {
  try {
    const header = colors.rainbow(`============= 
 Tabla del ${base}  
=============`);

    let salida = "";
    let consola = "";

    for (let i = 1; i <= limite; i++) {
      salida += `
  ${base} x ${i} = ${base * i}`;
      consola += `
  ${colors.cyan(base)} ${colors.brightYellow("x")} ${colors.red(
        i
      )} = ${colors.magenta(base * i)}`;
    }

    listar && console.log(`${header}${consola}`);

    mkdir("./salida", { recursive: true }, (err) => {
      // => [Error: EPERM: operation not permitted, mkdir 'C:\']
    });

    writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

export default crearArchivo;
