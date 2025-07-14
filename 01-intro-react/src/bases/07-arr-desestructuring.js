//Desestructueración de arreglos

const personajes = ['Goku', 'Pikoro','Vegeta'];

//Para desestructurar un arreglo, usamos [], se acceden a los valores, 
//mediante las posicones que este tenga

//Accedemos al valor en la primera posición
const [p1] = personajes;

//De esta forma, accedemos a valores en diferentes posiciones del arreglo
const [,p2] = personajes;

console.log(p1, p2);


const exampleUseState = (nombre) => {
    return [nombre, () => {console.log('Hola')}];
}

const [nombre, setNombre] = exampleUseState('Goku');

console.log(nombre);
console.log(setNombre);