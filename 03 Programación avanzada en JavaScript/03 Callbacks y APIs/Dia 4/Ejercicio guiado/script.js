fetch('https://jsonplaceholder.typicode.com/photos/1')
  .then(response => response.json())
  .then(json => console.log(json))

const urlBase = 'https://jsonplaceholder.typicode.com';

const getDatos = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const main = async () => {
  try {
    const todos = await getDatos(`${urlBase}/todos/1`);
    const photos = await getDatos(`${urlBase}/photos/1`);
    if(!info.id) throw 'No trae la propiedad ID';
    console.log(info);
  } catch (error) {
    console.log(`Ha ocurrido un error: ${error}`)
  } finally {
    console.log('Adios, eso fue todo...')
  }
};

main();