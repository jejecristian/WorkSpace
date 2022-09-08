// responsable tiene una o mas mascotas
// mascota tiene un responsable
// mascota es un Animal

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
    constructor(nombre_responsable, telefono_responsable, direccion_responsable, tipo_animal, nombre_mascota, diagnostico_mascota){
        super(nombre_responsable, telefono_responsable, direccion_responsable, tipo_animal)
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