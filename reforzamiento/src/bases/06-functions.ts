
function greet(name: string): string {
    return `Hola ${name}`;
}

const greet2 = (name: string): string => {
    return `Hola ${name}`;
}

console.log(greet('Miguel'));

interface User {
    uuid: string;
    userName: string;
}

function getUser2(): User {
    return {
        uuid: '123',
        userName: 'miguelPinguin'
    }
}

const getUser = () => ({
    uid: 123,
    name: 'miguelPinguin'
});

console.log('Mensaje 2', greet2('Miguel'));

console.log(getUser());
console.log(getUser2());


const myNumbers: number[] = [1, 2, 3, 4, 5];

// myNumbers.forEach(function(val) {
//     console.log(val);
// });

// myNumbers.forEach((val) => {
//     console.log(val);
// })

myNumbers.forEach(console.log);