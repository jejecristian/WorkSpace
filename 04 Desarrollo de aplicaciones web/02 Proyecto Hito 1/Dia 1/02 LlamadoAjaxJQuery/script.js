// Petición a un endpoint utilizando el método AJAX de jQuery

// CODIGO A
$.ajax({
    type: 'json',
    url: 'http://example.com/movies.json',
    success: function (respuesta) {
    },
    error: function () {
        console.log("No se ha podido obtener la información");
    }
});

// CODIGO B

// CODIGO C