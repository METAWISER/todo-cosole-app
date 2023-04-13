import colors from 'colors'
import { log } from 'console';
import { resolve } from 'path';
import readline from 'readline';


const mostrarMenu = () => {

  return new Promise((resolve)=> {
    console.log(colors.magenta('================================='));
    console.log(colors.magenta('|    Seleccione una opcion      |'));
    console.log(colors.magenta('================================='));
  
    console.log(`${colors.magenta('1')}. ${colors.blue.bold.italic('Crear tarea')}`);
    console.log(`${colors.magenta('2')}. ${colors.blue.bold.italic('Listar tareas')}`);
    console.log(`${colors.magenta('3')}. ${colors.blue.bold.italic('Listar tareas compledadas')}`);
    console.log(`${colors.magenta('4')}. ${colors.blue.bold.italic('Listar tareas pendientes')}`);
    console.log(`${colors.magenta('5')}. ${colors.blue.bold.italic('Completar tarea(s)')}`);
    console.log(`${colors.magenta('6')}. ${colors.blue.bold.italic('Borrar tarea(s)')}`);
    console.log(`${colors.magenta('0')}. ${colors.blue.bold.italic('Salir')} \n`);
     
    
    const readlines = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  
    readlines.question('Seleccione una opcion: ', (opt) => {
      readlines.close()
      resolve(opt)
    })
  })
  
}

const pausa = () => {
  return new Promise(resolve => {
    const readlines = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  
    readlines.question(`Presione ${'ENTER'.magenta} para continuar`, (opt) => {
      readlines.close()
      resolve()
    })
  })
  
}


export {
   mostrarMenu, pausa 
}
