//Desestructuración
//Asignación desdestructurante
const persona = {
    name:'Miguel',
    age:20,
    hero:'Super Man',
    clave: 'SUPER'
}


//Con esta notación, decimos extraer lo que está dentro de {} del objeto
// const {age,hero,name} = persona;

// console.log(name, age, hero);

const contextExample = (persona) => {
    const {age, clave} = persona;
    return {
        anios:age,
        clave:clave,
        address: {
            city:'Florencia',
            state:'Caquetá'
        }
    }
}

const {anios,clave,address:{city,state}} = contextExample(persona);
console.log(anios,clave);
console.log(city,state);
