//Se crea la clase estudiante
class Estudiantes {
  constructor(nombre, apellido, matricula, curso, nota) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.matricula = matricula;
    this.curso = curso;
    this.nota = nota;
  }
}
//funcion que limpia los inputs
function limpiar() {
  document.getElementById("input_name").value = "";
  document.getElementById("input_lastname").value = "";
  document.getElementById("input_matricula").value = "";
  document.getElementById("input_class").value = "";
  document.getElementById("input_nota").value = "";
}

//Arreglo de Objetos Estudiantes
let arrEstudiantes = [];

//Array para la captura de las notas de la seccion
let arrNotas = [];

//Programacion del boton guardar
const GUARDAR_BTN = document.getElementById("guardarBTN");

GUARDAR_BTN.addEventListener("click", () => {
  //Captura del cuerpo de la tabla
  const TABLE_BODY = document.getElementById("table_body");

  TABLE_BODY.textContent = "";
  const NOMBRE = document.getElementById("input_name").value;
  const APELLIDO = document.getElementById("input_lastname").value;
  const MATRICULA = document.getElementById("input_matricula").value;
  const CURSO = document.getElementById("input_class").value;
  const NOTA = document.getElementById("input_nota").value;

  //Instancia del objeto
  const ESTUDIANTE = new Estudiantes(
    NOMBRE,
    APELLIDO,
    MATRICULA,
    CURSO,
    parseInt(NOTA)
  );

  //Push al array arrEstudiantes
  arrEstudiantes.push(ESTUDIANTE);

  console.log(arrEstudiantes);

  //Creacion de la tabla
  for (let i = 0; i < arrEstudiantes.length; i++) {
    //Crea array con los valores del objeto
    let objectToArray = Object.values(arrEstudiantes[i]);

    // Crea el elemento <tr> y lo agrega al <tbody>
    const TABLE_ROW = document.createElement("tr");
    TABLE_BODY.appendChild(TABLE_ROW);

    //Segundo for loop que itera sobre el array de valores
    for (let j = 0; j < objectToArray.length; j++) {
      // Crea el elemento <td> y lo agrega al <tr>
      const TABLE_DATA = document.createElement("td");
      // Crea el contenido del elemento <td> y lo agrega al <tr>
      const TABLE_INFO = document.createTextNode(objectToArray[j]);
      TABLE_ROW.appendChild(TABLE_DATA);
      TABLE_DATA.appendChild(TABLE_INFO);
    }
  }
  //Captura de las notas de la seccion
  arrNotas.push(parseInt(NOTA));
  console.log(arrNotas);

  //Calculo del promedio con reduce()

  let SUMA_NOTAS = arrNotas.reduce((sumatoria, notas, indice, array) => {
    console.log(sumatoria + notas, indice, array);
    //return (sumatoria + notas) / arrNotas.length;
    return sumatoria + notas;
  }, 0);
  // console.log(`El Array tiene ${arrNotas.length} elementos`);
  // console.log(`El promedio de la clase es ${SUMA_NOTAS / arrNotas.length}`);

  //Muestra el promedio en el DOM
  const PROMEDIO_CALCULADO = SUMA_NOTAS / arrNotas.length;

  const PARRAFO_PROMEDIO = document.getElementById("parrafo_promedio");
  PARRAFO_PROMEDIO.textContent = PROMEDIO_CALCULADO.toFixed(2);

  //Muestra la tabla y el encabezado de promedio

  const TABLE = document.getElementById("table");
  const TITULO_PROMEDIO = document.getElementById("title_level_2");

  TABLE.classList.remove("hide");
  TITULO_PROMEDIO.classList.remove("hide");
  limpiar();

  //Local Storage

  localStorage.setItem("estudiantes", JSON.stringify(arrEstudiantes));

  //...
  let storedNames = JSON.parse(localStorage.getItem("estudiantes"));
});

//Calcular promedio tomando las notas y poniendolas en un nuevo array de notas
//Luego usar reduce para el calculo del promedio de forma automatica
// function limpiar() {
//   document.getElementById("input_name").value = "";
//   document.getElementById("input_lastname").value = "";
//   document.getElementById("input_matricula").value = "";
//   document.getElementById("input_class").value = "";
//   document.getElementById("input_nota").value = "";
//}
