const form = document.querySelector('form');
form.addEventListener('submit', (event)=>{
  event.preventDefault();
  const [{value : to }, {value : subject}, {value : text}] = event.target;

  if(!to || !subject || !text){
    return alert('todos los datos son requeridos');
  };

  form.submit();
});

