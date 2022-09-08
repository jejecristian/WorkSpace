const piopio = (callback) => {
  console.log('huevo');
  callback();
  console.log('gallina');
};

piopio(() => console.log('pollito'));