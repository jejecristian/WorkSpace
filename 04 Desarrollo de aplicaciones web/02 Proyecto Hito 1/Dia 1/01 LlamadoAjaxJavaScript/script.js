// Petición a un endpoint utilizando el método fetch de JavaScript

// CODIGO A
fetch('http://example.com/movies.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
    });

// CODIGO B


// CODIGO C