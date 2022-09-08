// Uso de jQuery y JavaScript para manipular el DOM

/* en el html
<div id="caja"></div>
<button type="button">Click</button>
*/

// CODIGO A
$('button').on('click', () => {
    let caja = document.getElementById('caja')
    caja.innerHTML = "hola mundo"
})

// CODIGO B
document.querySelector('body').innerHTML += '<br><br><button type="button" id="button2">Click2</button>'
$('#button2').on('click', () => {
    let caja = document.getElementById('caja')
    caja.innerHTML += "<h5>hola otra vez</h5>"
})

// CODIGO C
document.querySelector('body').innerHTML += '<br><br><br><br><button type="button" id="button3">Click3</button>'
$('#button3').on('click', () => {
    let caja = document.getElementById('caja')
    caja.innerHTML += "<h5>fin mensaje</h5>"
})