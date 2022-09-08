// responsable tiene una o mas mascotas
// mascota tiene un responsable
// mascota es un Animal

let datos = (event) => {
    event.preventDefault()
    let nombre_responsable = document.getElementById('propietario').value
    let telefono_responsable = document.getElementById('telefono').value
    let direccion_responsable = document.getElementById('direccion').value
    let tipo_animal = document.getElementById('tipo').value
    let nombre_mascota = document.getElementById('nombreMascota').value
    let diagnostico_mascota = document.getElementById('enfermedad').value

    //console.log(nombre_responsable, telefono_responsable, direccion_responsable, tipo_animal, nombre_mascota, diagnostico_mascota)

    if (tipo_animal == 'gato') {
        let gato = new Mascota(nombre_responsable, telefono_responsable, direccion_responsable, tipo_animal, nombre_mascota, diagnostico_mascota)
        creaMascotaClinica(gato)
    } else if(tipo_animal == 'perro'){
        let perro = new Mascota(nombre_responsable, telefono_responsable, direccion_responsable, tipo_animal, nombre_mascota, diagnostico_mascota)
        creaMascotaClinica(perro)
    }else {
        let conejo = new Mascota(nombre_responsable, telefono_responsable, direccion_responsable, tipo_animal, nombre_mascota, diagnostico_mascota)
        creaMascotaClinica(conejo)
    }
}

let creaMascotaClinica = (animal) => {
    console.log('------------Creando ficha clinica-------------')
    console.log(animal.datosResponsable())
    console.log(animal.tipo)
    console.log(animal.nombreMascota)
    console.log(animal.diagnosticoMascota)
    console.log('------------Fin ficha clinica-------------')
}

let formulario = document.querySelector("form")
formulario.addEventListener("submit", datos)


class Responsable {
    constructor(nombre_responsable, telefono_responsable, direccion_responsable) {
        this.nombreResponsable = nombre_responsable
        this.telefonoResponsable = telefono_responsable
        this.direccionResponsable = direccion_responsable
    }
    datosResponsable() {
        return `Dueño: ${this.nombreResponsable}, Numero Telefónico: ${this.telefonoResponsable}, Lugar de Residencia: ${this.direccionResponsable}`
    }
}

class Animal extends Responsable {
    constructor(nombre_responsable, telefono_responsable, direccion_responsable, tipo_animal) {
        super(nombre_responsable, telefono_responsable, direccion_responsable)
        this._tipoAnimal = tipo_animal
    }
    get tipo() {
        return `Tipo: ${this._tipoAnimal}`
    }
}

class Mascota extends Animal {
    constructor(nombre_responsable, telefono_responsable, direccion_responsable, tipo_animal, nombre_mascota, diagnostico_mascota) {
        super(nombre_responsable, telefono_responsable, direccion_responsable, tipo_animal)
        this._nombreMascota = nombre_mascota
        this.diagnosticoMascota = diagnostico_mascota
    }
    get nombreMascota() {
        return this._nombreMascota
    }
    set nombreMascota(nombre_mascota) {
        this._nombreMascota = nombre_mascota
    }
    get diagnosticoMascota() {
        return this._diagnosticoMascota
    }
    set diagnosticoMascota(diagnostico_mascota) {
        this._diagnosticoMascota = diagnostico_mascota
    }
}

// // Probando la herencia... Todo bien (y)
// let cachupin = new Mascota('Leopoldo','+56912345678', 'mi casa', 'kiltro', 'cachupin', 'daño estomacal')
// console.log(cachupin)
// console.log(cachupin.datosResponsable())
