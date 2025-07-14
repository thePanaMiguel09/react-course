
//Los objetos literales se reconocen por {}, funcionan como llave valor
const persona = {
    name: 'Miguel',
    surName:'Chavez',
    age:20,
    address: {
        city: 'Florenica',
        state: 'Caquetá',
        code: 'Crra 29A #24-37',
    }
}

console.log(persona);


//Esto es una asignación que no copia el objeto, solo hace
//una referencia al espacio en memoria
//por lo tanto, si modificamos el objeto 2, estamos modificando el objeto original
// const persona2 = persona;
//Para clonar objetos, usamos el expressed operator de js ...objeto

const persona2 = {...persona};

persona2.name= 'Angela';



//console.table(persona);
console.log(persona2);
console.log(persona);
