import Tarea from './tarea.js'

class Tareas {

  _listado = {}

  get listadoArr () {
    const listado =  []
    Object.keys(this._listado).forEach( key => {
      const tarea = this._listado[key]
      listado.push(tarea)
    })
    return listado
  }
  
  constructor(){
    this._listado = {}
  }

  borrarTarea(id = '') {
    if(this._listado[id]){
      delete this._listado[id]
    }
  }
  cargarTareaFromArray(arrTareas){
    arrTareas.forEach( tarea => {
      this._listado[tarea.id] = tarea
    })
    
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc)
    this._listado[tarea.id] = tarea
  }

  listadoCompleto(){
    this.listadoArr.forEach((tarea, i) => {
      const idx = `${i + 1}`.yellow
      const {desc, completadoEn} = tarea
      const estado = (completadoEn === null)
                              ? 'Pendiente'.red
                              : 'Completado'.green
      console.log(`${idx}. ${desc} :: ${estado}`);
    })
  }

  listadoCompletadas(){
    let contador = 0;
    this.listadoArr.filter(tarea => {
      if(tarea.completadoEn !== null) {
        contador += 1;
        console.log(contador.toString().yellow ,tarea.desc, ':: Completada'.green);
      }

    })
    
  }

  listadoPendientes(){
    let contador = 0;
    this.listadoArr.filter(tarea => {
      if(tarea.completadoEn===  null) {
        contador += 1;
        console.log(contador.toString().yellow ,tarea.desc, ':: Pendiente'.red);
      }

    })
    
  }

  toggleCompletadas(ids =[]){
    ids.forEach(id => {
      const tarea = this._listado[id]
      if (!tarea.completadoEn){
        tarea.completadoEn = new Date().toISOString()
      }
    })

    this.listadoArr.forEach( tarea => {
      if (!ids.includes(tarea.id)){
        this._listado[tarea.id].completadoEn = null
      }
    })
  }
}

export default Tareas

