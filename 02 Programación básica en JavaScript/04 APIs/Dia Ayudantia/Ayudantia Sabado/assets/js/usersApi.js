
$.ajax({
  url: 'https://randomuser.me/api/?results=10',
  method: 'GET',
  dataType: 'json',
  success: function (data) {
    console.log(data.results);
    const parrafo = data.results.map((user) => `<p>${user.name.first} ${user.name.last}</p>`);
    $('#users').html(parrafo.join(''));
  },
  error: function (error) {}
});