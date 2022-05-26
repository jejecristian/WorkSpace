//*******************************************************************************************************************
//*******************************************************************************************************************
// Crea objetos de Radiologia
let radio1 = {
  hora: '11:00',
  especialista: 'IGNACIO SCHULZ',
  paciente: 'FRANCISCA ROJAS',
  rut: '9878782-1',
  prevision: 'FONASA'
}
let radio2 = {
  hora: '11:30',
  especialista: 'FEDERICO SUBERCASEAUX',
  paciente: 'PAMELA ESTRADA',
  rut: '15345241-3',
  prevision: 'ISAPRE'
}
let radio3 = {
  hora: '15:00',
  especialista: 'FERNANDO WURTHZ',
  paciente: 'ARMANDO LUNA',
  rut: '16445345-9',
  prevision: 'ISAPRE'
}
let radio4 = {
  hora: '15:30',
  especialista: 'ANA MARIA GODOY',
  paciente: 'MANUEL GODOY',
  rut: '17666419-0',
  prevision: 'FONASA'
}
let radio5 = {
  hora: '16:00',
  especialista: 'PATRICIA SUAZO',
  paciente: 'RAMON ULLOA',
  rut: '14989389-K',
  prevision: 'FONASA'
}
// Crea objetos de Traumatología
let trauma1 = {
  hora: '8:00',
  especialista: 'MARIA PAZ ALTUZARRA',
  paciente: 'PAULA SANCHEZ',
  rut: '15554774-5',
  prevision: 'FONASA'
}
let trauma2 = {
  hora: '10:00',
  especialista: 'RAUL ARAYA',
  paciente: 'ANGÉLICA NAVAS',
  rut: '15444147-9',
  prevision: 'ISAPRE'
}
let trauma3 = {
  hora: '10:30',
  especialista: 'MARIA ARRIAGADA',
  paciente: 'ANA KLAPP',
  rut: '17879423-9',
  prevision: 'ISAPRE'
}
let trauma4 = {
  hora: '11:00',
  especialista: 'ALEJANDRO BADILLA',
  paciente: 'FELIPE MARDONES',
  rut: '1547423-6',
  prevision: 'ISAPRE'
}
let trauma5 = {
  hora: '11:30',
  especialista: 'CECILIA BUDNIK',
  paciente: 'DIEGO MARRE',
  rut: '16554741-K',
  prevision: 'FONASA'
}
let trauma6 = {
  hora: '12:00',
  especialista: 'ARTURO CAVAGNARO',
  paciente: 'CECILIA MENDEZ',
  rut: '9747535-8',
  prevision: 'ISAPRE'
}
let trauma7 = {
  hora: '12:30',
  especialista: 'ANDRES KANACRI',
  paciente: 'MARCIAL SUAZO',
  rut: '11254785-5',
  prevision: 'ISAPRE'
}
// Crea objetos de Dental
let dental1 = {
  hora: '8:30',
  especialista: 'ANDREA ZUÑIGA',
  paciente: 'MARCELA RETAMAL',
  rut: '11123425-6',
  prevision: 'ISAPRE'
}
let dental2 = {
  hora: '11:00',
  especialista: 'MARIA PIA ZAÑARTU',
  paciente: 'ANGEL MUÑOZ',
  rut: '9878789-2',
  prevision: 'ISAPRE'
}
let dental3 = {
  hora: '11:30',
  especialista: 'SCARLETT WITTING',
  paciente: 'MARIO KAST',
  rut: '7998789-5',
  prevision: 'FONASA'
}
let dental4 = {
  hora: '13:00',
  especialista: 'FRANCISCO VON TEUBER',
  paciente: 'KARIN FERNANDEZ',
  rut: '18887662-K',
  prevision: 'FONASA'
}
let dental5 = {
  hora: '13:30',
  especialista: 'EDUARDO VIÑUELA',
  paciente: 'HUGO SANCHEZ',
  rut: '17665461-4',
  prevision: 'FONASA'
}
let dental6 = {
  hora: '14:00',
  especialista: 'RAQUEL VILLASECA',
  paciente: 'ANA SEPULVEDA',
  rut: '14441281-0',
  prevision: 'ISAPRE'
}
// Crea arreglo de Radiología, Traumatología y Dental, cada uno con sus respectivos Objetos
var radioArray = [radio1, radio2, radio3, radio4, radio5]
var traumaArray = [trauma1, trauma2, trauma3, trauma4, trauma5, trauma6, trauma7]
var dentalArray = [dental1, dental2, dental3, dental4, dental5, dental6]
//*******************************************************************************************************************
//*******************************************************************************************************************
// Crea variable para identificar botones para escucharlos
var br2reg = document.getElementById('btnRadio2reg');
var bt2reg = document.getElementById('btnTrauma2reg');
var bd2reg = document.getElementById('btnDental2reg');
var br = document.getElementById('btnRadio');
var bt = document.getElementById('btnTrauma');
var bd = document.getElementById('btnDental');
// Escucha e invoca funciones que muestran primer y último registro
br2reg.addEventListener('click', radioDosReg);
bt2reg.addEventListener('click', traumaDosReg);
bd2reg.addEventListener('click', dentalDosReg);
// Escucha e invoca funciones que muestran el contenido en una tabla
br.addEventListener('click', radioContenido);
bt.addEventListener('click', traumaContenido);
bd.addEventListener('click', dentalContenido);
//*******************************************************************************************************************
//*******************************************************************************************************************
// Obtiene el primer y último registro de Radiología
function radioDosReg() {
  var frase = ''
  for (var i = 0; i < radioArray.length; i++) {
    if (i == 0) {
      frase = "Primera atención: " + radioArray[i].paciente + ' - ' + radioArray[i].prevision
    } else if (i == radioArray.length - 1) {
      frase = frase + " | Última atención: " + radioArray[i].paciente + ' - ' + radioArray[i].prevision
    }
  }
  document.getElementById('resultado2reg').innerHTML = frase
  document.getElementById("resultado2reg").style.display = 'block'
  document.getElementById("tabla").style.display = 'none'
}
// Obtiene el primer y último registro de Traumatología
function traumaDosReg() {
  var frase = ''
  for (var i = 0; i < traumaArray.length; i++) {
    if (i == 0) {
      frase = "Primera atención: " + traumaArray[i].paciente + ' - ' + traumaArray[i].prevision
    } else if (i == traumaArray.length - 1) {
      frase = frase + " | Última atención: " + traumaArray[i].paciente + ' - ' + traumaArray[i].prevision
    }
  }
  document.getElementById('resultado2reg').innerHTML = frase
  document.getElementById("resultado2reg").style.display = 'block'
  document.getElementById("tabla").style.display = 'none'
}
// Obtiene el primer y último registro de Dental
function dentalDosReg() {
  var frase = ''
  for (var i = 0; i < dentalArray.length; i++) {
    if (i == 0) {
      frase = "Primera atención: " + dentalArray[i].paciente + ' - ' + dentalArray[i].prevision
    } else if (i == dentalArray.length - 1) {
      frase = frase + " | Última atención: " + dentalArray[i].paciente + ' - ' + dentalArray[i].prevision
    }
  }
  document.getElementById('resultado2reg').innerHTML = frase
  document.getElementById("resultado2reg").style.display = 'block'
  document.getElementById("tabla").style.display = 'none'
}
//*******************************************************************************************************************
//*******************************************************************************************************************
// Recorre el arreglo y muestra el contenido de Radiología en una tabla
function radioContenido() {
  let dtabla = '';
  for (datos of radioArray) {
    dtabla += '<tr><td>' + datos.hora + '</td><td>' + datos.especialista + '</td><td>' + datos.paciente + '</td><td>' + datos.rut + '</td><td>' + datos.prevision + '</td></tr>';
  }
  document.getElementById('cuerpo').innerHTML = dtabla;
  document.getElementById("tabla").style.display = 'block'
  document.getElementById("resultado2reg").style.display = 'none'
}
// Recorre el arreglo y muestra el contenido de Traumatología en una tabla
function traumaContenido() {
  let dtabla = '';
  for (datos of traumaArray) {
    dtabla += '<tr><td>' + datos.hora + '</td><td>' + datos.especialista + '</td><td>' + datos.paciente + '</td><td>' + datos.rut + '</td><td>' + datos.prevision + '</td></tr>';
  }
  document.getElementById('cuerpo').innerHTML = dtabla;
  document.getElementById("tabla").style.display = 'block'
  document.getElementById("resultado2reg").style.display = 'none'
}
// Recorre el arreglo y muestra el contenido de Dental en una tabla
function dentalContenido() {
  let dtabla = '';
  for (datos of dentalArray) {
    dtabla += '<tr><td>' + datos.hora + '</td><td>' + datos.especialista + '</td><td>' + datos.paciente + '</td><td>' + datos.rut + '</td><td>' + datos.prevision + '</td></tr>';
  }
  document.getElementById('cuerpo').innerHTML = dtabla;
  document.getElementById("tabla").style.display = 'block'
  document.getElementById("resultado2reg").style.display = 'none'
}
  //*******************************************************************************************************************
  //*******************************************************************************************************************
