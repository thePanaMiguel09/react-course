
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //! Regresame mi dinero
        // resolve(100);
        reject('Mi amigo me robó')
    }, 2000);
});

myPromise.then(
    (moneyBack) => {
        console.log(`My money is back ${moneyBack}`);
    }
).catch(reason => {
    console.warn(reason);
}).finally(() => {
    console.log('A seguir chambeando');
});