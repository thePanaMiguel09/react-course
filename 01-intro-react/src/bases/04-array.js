//Arreglos en JS
//Un array es una colección de info que se encuentra dentro de una variable


// const arreglo = new Array();
const arreglo = [1,2,3,4,5];
//  No es recomdable usar push ya que modifica el arreglo original arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

const arreglo2 = [...arreglo,6];

//Map es una función que viene dentro del Prototype de los arreglos,
//esta funcion, espera un call back, otra función dentro de map,
//la cua, devuelve un arreglo con los valores que ejecute la función
const arreglo3 = arreglo2.map((number) => {
    return number *2;
})



console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);