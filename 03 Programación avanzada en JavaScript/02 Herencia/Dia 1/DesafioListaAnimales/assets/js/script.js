// responsable tiene una o mas mascotas
// mascota tiene un responsable
// mascota es un Animal

class Propietario {
    constructor(nombre_propietario, telefono_propietario, direccion_propietario) {
        this.nombrePropietario = nombre_propietario
        this.telefonoPropietario = telefono_propietario
        this.direccionPropietario = direccion_propietario
    }
    datosPropietario() {
        return `Dueño: ${this.nombrePropietario}, Numero Telefónico: ${this.telefonoPropietario}, Lugar de Residencia: ${this.direccionPropietario}`
    }
}

class Animal extends Propietario {
    constructor(nombre_propietario, telefono_propietario, direccion_propietario, tipo_animal) {
        super(nombre_propietario, telefono_propietario, direccion_propietario)
        this._tipoAnimal = tipo_animal
    }
    get tipo() {
        return `Tipo: ${this._tipoAnimal}`
    }
}

class Mascota extends Animal {
    constructor(nombre_propietario, telefono_propietario, direccion_propietario, tipo_animal, nombre_mascota, diagnostico_mascota){
        super(nombre_propietario, telefono_propietario, direccion_propietario, tipo_animal)
        this._nombreMascota = nombre_mascota
        this.diagnosticoMascota = diagnostico_mascota
    }
    get nombreMascota(){
        return this._nombreMascota
    }
    set nombreMascota(nombre_mascota){
        this._nombreMascota = nombre_mascota
    }
    get diagnosticoMascota(){
        return this._diagnosticoMascota
    }
    set diagnosticoMascota(diagnostico_mascota){
        this._diagnosticoMascota = diagnostico_mascota
    }
}

// Probando la herencia... Todo bien (y)
let cachupin = new Mascota('Leopoldo','+56912345678', 'mi casa', 'kiltro', 'cachupin', 'daño estomacal')
console.log(cachupin)
console.log(cachupin.datosPropietario())
