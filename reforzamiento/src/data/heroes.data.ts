export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

//Tipos de datos cuando tenemos valores específicos
// type Owner = 'DC' | 'Marvel'; 

export type Owner = 'DC' | 'Marvel';

export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: "DC",
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: "Marvel",
    },
    {
        id: 3,
        name: 'Superman',
        owner: "DC",
    },
    {
        id: 4,
        name: 'Flash',
        owner: "Marvel",
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: "Marvel",
    },
    {
        id: 6,
        name: 'Green Lantern',
        owner: "DC"
    }
];