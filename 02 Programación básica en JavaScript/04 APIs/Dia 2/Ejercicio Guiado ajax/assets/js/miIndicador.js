$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://mindicador.cl/api",
    dataType: "json",
    success: function (data) {
      console.log(data);
      console.log(data.uf.valor);
      $('#valorUf').text(data.uf.valor);
    },
  });
});
