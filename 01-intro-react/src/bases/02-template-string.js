//Template string
const name = 'Miguel';
const surName = 'Chavez';

const fullName = name + " " +  surName;

//Nombre completo con temple string
const templeStringName = `${name} ${surName}`

console.log(fullName);
console.log(templeStringName);

function getSaludo(name) {
    return `Hola Mundo ${name}`;
}


console.log(getSaludo(name));