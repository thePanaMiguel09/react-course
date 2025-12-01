
const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , name1] = characterNames;

console.log({ name1 });

const returnsArrayFn = () => {
    return [
        1,
        "A"
    ] as const;
};

const [num, letter] = returnsArrayFn();

console.log(num, letter);

function useState(val: string) {
    return [
        val,
        (val: string) => console.log(val)
    ] as const;
};

const [name, setName] = useState('Miguel');

console.log(name);
setName('Gokú');