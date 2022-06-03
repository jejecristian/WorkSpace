$(".btn").click(function () {
  $(".text").text("loading . . .");
  $.ajax({
    type: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/ditto",
    dataType: "json",
    success: function (data) {
      $(".text").text(JSON.stringify(data));
    },
  });
});
