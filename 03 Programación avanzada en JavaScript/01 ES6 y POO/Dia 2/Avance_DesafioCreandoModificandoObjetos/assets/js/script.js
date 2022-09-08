// Dos entidades Consultorio y Paciente


//Entidad 1 CONSULTORIO
var Consultorio = new Object()
Consultorio.nombre
Consultorio.paciente

// funcion constructora 
var Consultorio = function(nombre, paciente){
    this.nombre = nombre
    this.paciente = paciente
}

// geter y seter
var getNombre = function(){
    return this.nombre
}
var getPaciente = function(){
    return this.paciente
}
var setNombre = function(nombre){
    this.nombre = nombre
}
var setPaciente = function(paciente){
    this.paciente = paciente
}

// funciones personalizadas
var mostrarDatos = function(){
    console.log(`Nombre consultorio: ${this.nombre}, Pacientes: ${this.paciente}`)
}
// ********************************************************************************************************



//Entidad 2 PACIENTE
var Paciente = new Object()
Paciente.nombre
Paciente.edad
Paciente.rut
Paciente.diagnostico

// funcion constructora
var Paciente = function(nombre, edad, rut, diagnostico) {
    this.nombre = nombre
    this.edad = edad
    this.rut = rut
    this.diagnostico = diagnostico
}

// geter y seter
var getNombre = function(){
    return this.nombre
}
var getEdad = function(){
    return this.edad
}
var getRut = function(){
    return this.rut
}
var getDiagnostico = function(){
    return this.diagnostico
}
var setNombre = function(nombre){
    this.nombre = nombre
}
var setEdad = function(edad){
    this.edad = edad
}
var setRut = function(rut){
    this.rut = rut
}
var setDiagnostico = function(diagnostico){
    this.diagnostico = diagnostico
}
// metodos propios de la Clase
var mostrarMisDatos = function(){
    console.log(this.getNombre, this.getEdad, this.getRut, this.getDiagnostico)
}
// ********************************************************************************************************



// METODOS GLOBALES MEDIANTE prototype
Consultorio.prototype.buscarPacientesPorNombre = function(nombre){
    //aca se buscan los pacientes por nombre
    //idealmente utilizar el metodo Filter
    //ya que puede haber 1 o mas coincidencias por el nombre
}
Paciente.prototype.mostrarDatos = function(){
    //aca se imprimen todos los pacientes
    //por ejemplo el arreglo completo
    //cada objeto con sus atributos
}
