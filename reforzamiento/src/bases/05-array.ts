//Creación de un array en ts
const myArray: number[] = [1, 2, 3, 4];

myArray.push(5);

for (const number of myArray) {
    console.log(number);
}

const myArray2: (number | string)[] = structuredClone(myArray);

myArray2.push('6')

console.log({ myArray2 });