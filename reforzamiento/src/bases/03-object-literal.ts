//Creación de objetos literales
const ironMan = {
    firstName: 'Miguel',
    lastName: 'Chavez',
    age: 20,
    address: {
        city: 'Florencia',
        code: 180009
    }
};

const spiderMan = { ...ironMan };

spiderMan.age = 19;
spiderMan.address.city = 'Bogotá'


//El spress operator rompe las referecias de primer nivel, pero deja la referencias a propiedades anidadas dentro del objeto

console.log({ ironMan }, { spiderMan });

const deepIronManClone = structuredClone(ironMan);
console.log({ deepIronManClone })

deepIronManClone.firstName = 'Deep clone name';
deepIronManClone.lastName = 'Deep clone lastname';
deepIronManClone.age = 30;