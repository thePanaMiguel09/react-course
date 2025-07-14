//Funciones en JS

//Es recomendable asignar de otra forma una función, ya que de esta forma, podemos sobre escribir la referencia
//a la función, lo cual daría un error
// function saludar(name) {
//     return `Hola ${name}`;
//  }

//  saludar = 10;

//De esta forma asignamos una function a la constante
const saludar = function (name) {
  return `Hola ${name}`;
};

//También existen las funciones flecha

const saludar2 = (name) => {
  return `Hola ${name}`;
};

//Si una función solo tiene un return simple, podemos usar la siguiente notación
const saludar3 = (name) => `Hola ${name}`;

//También se puede devolver un objeto implicito
const saludar4 = (name) => ({ UUID: 1234, name: name });

console.log(saludar("Miguel"));
console.log(saludar2("Angela"));
console.log(saludar3("Daniela"));
console.log(saludar4("Carlos Arturo"));
