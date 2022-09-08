const url = 'https://jsonplaceholder.typicode.com/photos';

const albunes = async (url) => {
  try {
    const response = await fetch(url);
    const datos = await response.json();
    if (!datos.length) throw 'La data no se encuentra'
    datos.forEach(elemento => {
      if (elemento.id <= 20) {
        console.log(elemento.title);
      }
    });
  } catch (err) {
    console.log(err);
  }
}

const mensajePromesa = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Información Enviada :)')
    }, 3000)
  })
}

const recibirValor = async () => {

  albunes(url);
  const mensaje = await mensajePromesa();
  console.log(mensaje)
}

recibirValor();
