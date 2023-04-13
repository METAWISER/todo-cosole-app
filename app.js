import { guardarDB, leeDB } from "./helpers/guardarArchivo.js";
import { inquirerMenu, leerInput, pausa, borrarInput, confirmar, mostrarListadoChecklist } from "./helpers/inquirer.js";
import Tareas from "./models/tareas.js";

const main = async () => {
  
  let opt = "";
  const tareas = new Tareas();
  
  const tareasDB = leeDB()
  
  if(tareasDB) {
    tareas.cargarTareaFromArray(tareasDB)
  }
  
  do {
    console.clear()
    opt = await inquirerMenu();
    
    switch (opt) {
      
      case "1":
        //Crear option
        const desc = await leerInput("Descripcion:");
        tareas.crearTarea(desc);
        break;
      case "2":
        
        tareas.listadoCompleto()
        
        break;
      case "3":
        tareas.listadoCompletadas()
        break;
      case "4":
        tareas.listadoPendientes()
        break;
      case '5':
        const ids = await mostrarListadoChecklist( tareas.listadoArr)
        tareas.toggleCompletadas(ids)
        break;
      case '6':
        const id = await borrarInput( tareas.listadoArr)
        const ok = await confirmar('Estas seguro?')
        if (ok) {
          tareas.borrarTarea(id)
          console.log('Tarea borrada correctamente');
        }
      default:
        break;
    }
    guardarDB(tareas.listadoArr)

    if (opt !== "0") await pausa();

  } while (opt !== "0");
};

main();
