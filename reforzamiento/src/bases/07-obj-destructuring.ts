const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

const { name: personName, age: personAge, key } = person;

console.log({ personName, personAge, key });

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({ age, key, name, rank }: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank
    };
};

const context = useContext(person);

console.log(context);

const { user: { age, name }, keyName, rank } = context;

console.log(rank, keyName, name, age,);
