$(document).ready(function () {
    $('button').on('click', function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users",
            dataType: "json",
            success: function (datosApi) {
                console.log(datosApi.data);
                datosApi.data.forEach(element => {
                    $('.resultado')
                        .append(`
                        <p>ID: ${element.id}</p>
                        <p>Email: ${element.email}</p>
                        <p>Nombre: ${element.first_name}</p>
                        <p>Apellido: ${element.last_name}</p>
                        <p>Foto:</p><img src='${element.avatar}' alt='imagen${element.id}'><hr>`);
                })
            },
            error: function (error) {
                //si algo sale mal, se agrega la funcionalidad aquí.
                console.error(String(error))
            },
        });
    });
});