// let datos

// EJEMPLO 1
// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
// .then((response) => resolve.json)
// .then((data) => {
//     console.log(data)
//     //datos = data
// })

// console.log(datos)

// EJEMPLO 2
// const url = 'https://jsonplaceholder.typicode.com/users';
// fetch(url)
// .then((response) => resolve.json)
// .then(console.log)
// .catch((error) => console.log(error));


// EJEMPLO 3
// const url = 'https://jsonplaceholder.typicode.com/users';
// fetch(url)
// .then((response) => resolve.json)
// .then((data) => console.log(data))
// .catch((error) => console.log(error));


// EJEMPLO 4
const urlBase = 'https://jsonplaceholder.typicode.com';
const getDatos = async () => {
    const response = await fetch(url);
    const info = await response.json();
    return info;
};

const main = async () => {

    // ESTE MECANISMO ES EN SERIE
    const post = await getDatos(`${urlBase}/posts`);
    const comments = await getDatos(`${urlBase}/comments`);
    const albums = await getDatos(`${urlBase}/albums`);
    const photos = await getDatos(`${urlBase}/photos`);
    const todos = await getDatos(`${urlBase}/todos`);
    const users = await getDatos(`${urlBase}/users`);

    // ESTE MECANISMO ES EN PARALELO
    const Promesas = await Promise.all([
        getDatos(`${urlBase}/posts`),
        getDatos(`${urlBase}/comments`),
        getDatos(`${urlBase}/albums`),
        getDatos(`${urlBase}/photos`),
        getDatos(`${urlBase}/todos`),
        getDatos(`${urlBase}/users`),
    ])

};

main();

