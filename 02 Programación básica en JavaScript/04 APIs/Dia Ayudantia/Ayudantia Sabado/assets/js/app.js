const urlBase = 'https://api.thecatapi.com/v1/images/search';

const getCats = (cantidad) => {
  $('#loaderModal').modal('show');
  $.ajax({
    url: `${urlBase}?limit=${cantidad}`,
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      console.log(data);
      const fotos = data.map(({ url }) => `<div class="card-cat" style="background-image: url(${url});"></div>`);
      $('#cajaDeArena').html(fotos.join(''));
      setTimeout(() => {
        $('#loaderModal').modal('hide');
      }, 2000);
    },
    error: function (error) {
      setTimeout(() => {
        $('#loaderModal').modal('hide');
        console.log(error);
        alert('Ha ocurrido un error.');
      }, 500);
    }
  });
}

getCats(5);