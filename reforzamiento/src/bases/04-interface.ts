//Creación de interfaces

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address
}

interface Address {
    postalCode: string;
    city: string
}

const ironMan: Person = {
    firstName: 'Miguel',
    lastName: 'Chavez',
    age: 20,
    address: {
        city: 'Florencia',
        postalCode: '180009'
    }
};

const spiderMan: Person = {
    firstName: "Peter",
    lastName: "Parker",
    age: 22
}

console.log({ ironMan }, { spiderMan });

