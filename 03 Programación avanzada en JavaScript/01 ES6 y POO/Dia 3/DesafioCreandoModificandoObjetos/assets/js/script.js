// Dos entidades Consultorio y Paciente:


//Entidad 1 CONSULTORIO
// funcion constructora 
function Consultorio(nombreConsultorio, paciente) {
    this._nombre = function () {
        return nombreConsultorio
    }
    this._paciente = function () {
        return paciente || []
    }
}

// getters y setters
Consultorio.prototype.getNombre = function () {
    return this._nombre()
}
Consultorio.prototype.getPaciente = function () {
    return this._paciente().forEach(function (elemento, indice) {
        console.log(`Numero de registro: ${indice + 1}`)
        console.log('Nombre: ' + elemento._nombre())
        console.log("Edad: ", elemento._edad())
        console.log('Rut: ' + elemento._rut())
        console.log('Diagnostico: ', elemento._diagnostico())
        console.log('-------------------------------------')
    })
}
Consultorio.prototype.setNombre = function (nombreConsultorio) {
    this._nombre = function () {
        return nombreConsultorio
    }
}
Consultorio.prototype.setPaciente = function (paciente) {
    this.paciente.push(paciente)
}
// ********************************************************************************************************


//Entidad 2 PACIENTE
// funcion constructora
function Paciente(nombrePaciente, edadPaciente, rutPaciente, diagnosticoPaciente) {
    this._nombre = function () {
        return nombrePaciente
    }
    this._edad = function () {
        return edadPaciente
    }
    this._rut = function () {
        return rutPaciente
    }
    this._diagnostico = function () {
        return diagnosticoPaciente
    }
}

// getters y setters
Paciente.prototype.getNombre = function () {
    return this._nombre()
}
Paciente.prototype.getEdad = function () {
    return this._edad()
}
Paciente.prototype.getRut = function () {
    return this._rut()
}
Paciente.prototype.getDiagnostico = function () {
    return this._diagnostico()
}
Paciente.prototype.setNombre = function (nombrePaciente) {
    this._nombre = function () {
        return nombrePaciente
    }
}
Paciente.prototype.setEdad = function (edadPaciente) {
    this._edad = function () {
        return edadPaciente
    }
}
Paciente.prototype.setRut = function (rutPaciente) {
    this._rut = function () {
        return rutPaciente
    }
}
Paciente.prototype.setDiagnostico = function (diagnosticoPaciente) {
    this._diagnostico = function () {
        return diagnosticoPaciente
    }
}
// ********************************************************************************************************

// METODOS GLOBALES MEDIANTE prototype
// Metodo que permite buscar pacientes por nombre
Consultorio.prototype.buscarPacientesPorNombre = function (nombrePaciente) {
    console.log('**************************************')
    console.log('*** PACIENTES FILTRADOS POR NOMBRE ***')
    console.log('**************************************')
    console.log(`Criterio de busqueda: "${nombrePaciente}"`)
    console.log('--------------------------------------')
    var pacientesFiltrados = this._paciente().filter(function (elemento) {
        return elemento._nombre().toLowerCase().indexOf(nombrePaciente.toLowerCase()) > -1
    }).map(function (elemento, indice) {
        console.log(`# ${indice + 1}:`)
        console.log(`Nombre: ${elemento._nombre()}`)
        console.log(`Edad: ${elemento._edad()}`)
        console.log(`Rut: ${elemento._rut()}`)
        console.log(`Diagnostico: ${elemento._diagnostico()}`)
        console.log('--------------------------------------')
    })
    if (pacientesFiltrados.length === 0) { console.log('No se encontraron coincidencias') }
    return pacientesFiltrados
}

// Metodo que permite mostrar todos los datos de todos los pacientes
Consultorio.prototype.mostrarDatos = function () {
    console.log('')
    console.log('**************************************')
    console.log('*** DETALLE DE TODOS LOS PACIENTES ***')
    console.log('**************************************')
    this.getPaciente()
}

// **************************************************************************************************
// Declaracion e instancia de objetos de Paciente y Consultorio
var paciente1 = new Paciente('Juan Perez', '31 anios', '18.365.445-1', 'Covid')
var paciente2 = new Paciente('Carlos Morales', '25 anios', '20.222.790-2', 'Bronquitis aguda')
var paciente3 = new Paciente('Juan Castro', '22 anios', '25.441.860-3', 'Esguince tobillo')
var paciente4 = new Paciente('Pedro Juan Tapia', '43 anios', '13.270.524-4', 'Hipertension')
var paciente5 = new Paciente('Alvaro Lopez', '37 anios', '15.308.195-K', 'Caries dental')
var arregloPacientes = [paciente1, paciente2, paciente3, paciente4, paciente5]
var consultorio1 = new Consultorio('Consultorio Rancagua', arregloPacientes)

// **************************************************************************************************
// Invoca metodos requeridos
consultorio1.buscarPacientesPorNombre('JUAN') // Se genera busqueda de pacientes por nombre ej. Juan
consultorio1.mostrarDatos() // Se genera listado de todos los pacientes y sus datos
