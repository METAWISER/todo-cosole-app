import colors from "colors";
import inquirer from "inquirer";

const preguntas = [
  {
    type: "list",
    name: "option",
    message: `${"  Que desea hacer  ".italic}`.magenta,
    choices: [
      {
        value: "1",
        name: `${"1.".yellow} ${"Crear tarea".blue}`,
      },
      {
        value: "2",
        name: `${"2.".yellow} ${"Listar tarea".blue}`,
      },
      {
        value: "3",
        name: `${"3.".yellow} ${"Listar tareas completadas".blue}`,
      },
      {
        value: "4",
        name: `${"4.".yellow} ${"Listar tareas pendientes".blue}`,
      },
      {
        value: "5",
        name: `${"5.".yellow} ${"Completar tarea(s)".blue}`,
      },
      {
        value: "6",
        name: `${"6.".yellow} ${"Borrar tarea".blue}`,
      },
      {
        value: "0",
        name: `${"0.".yellow} ${"Salir".blue}`,
      },
    ],
  },
];

const inquirerMenu = async () => {
    
  console.log(colors.magenta('================================='));
  console.log(colors.magenta('|    Seleccione una opcion      |'));
  console.log(colors.magenta('================================='));

  

  const { option } = await inquirer.prompt(preguntas);
  return option;

};

const pausa = async () => {

  const questions = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"ENTER".yellow} para continuar`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(questions);

};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate( value ) {
        if( value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];
  const {desc} = await inquirer.prompt(question)
  return desc
};

const borrarInput = async (tareas = [])=> {
  const choices = tareas.map((tarea, i) => {
    const idx= `${i + 1}.`.green
    return {
      value: tarea.id,
      name: `${idx}. ${tarea.desc}` 
    }
  })
  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message:'Borrar',
      choices
    }
  ]
  const { id } = await inquirer.prompt(preguntas)
  return id;
}

const confirmar = async (message) => {

  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ]

  const { ok } = await inquirer.prompt(question)
  return ok
}

const mostrarListadoChecklist = async (tareas = [])=> {
  const choices = tareas.map((tarea, i) => {
    const idx= `${i + 1}.`.green
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}` ,
      checked: (tarea.completadoEn) ? true : false
    }
  })
  const pregunta = [
    {
      type: 'checkbox',
      name: 'ids',
      message:'Selecciones',
      choices
    }
  ]
  const { ids } = await inquirer.prompt(pregunta)
  return ids;
}

export { inquirerMenu, pausa, leerInput, borrarInput, confirmar, mostrarListadoChecklist };


