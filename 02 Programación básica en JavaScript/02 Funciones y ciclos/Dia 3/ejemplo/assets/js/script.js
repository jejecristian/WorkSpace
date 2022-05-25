let limpiar = () => {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}

let exito = () => {
    document.querySelector(".resultado").innerHTML = "Eviado con exito :)";
}

let validar = (nombre, asunto, mensaje) => {
    let validacionCorrecta = true;
    let expresionRegular = /[a-zA-Z]\w+/;

    if(nombre =="" || expresionRegular.test(nombre) == false){
        document.querySelector(".errorNombre").innerHTML = "El nombre no debe tener numero y es un campo requerido";
        validacionCorrecta = false;
    }

    if(asunto =="" || expresionRegular.test(asunto) == false){
        document.querySelector(".errorAsunto").innerHTML = "El asunto no debe tener numero y es un campo requerido";
        validacionCorrecta = false;
    }

    if(mensaje =="" || expresionRegular.test(mensaje) == false){
        document.querySelector(".errorMensaje").innerHTML = "El mensaje no debe tener numero y es un campo requerido";
        validacionCorrecta = false;
    }

    return validacionCorrecta;
}

let form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    limpiar();
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    let resultado = validar(nombre,asunto,mensaje);

    if(resultado == true){
        exito();
    }
})