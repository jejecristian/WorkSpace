function Veterinaria(nombreClinica, mascota){
    this._nombre = function(){
        return nombreClinica
    }
    this._mascota = function(){
        return mascota || []
    }
}

Veterinaria.prototype.setNombre = function(nombreClinica){
    this._nombre = function(){
        return nombreClinica
    }
}

Veterinaria.prototype.setMascota = function(mascota){
    this.mascota.push(mascota)
}

Veterinaria.prototype.getNombre = function(){
    return this._nombre()
}

Veterinaria.prototype.getMascota = function(){
    return this._mascota().forEach(function(elemento, indice){
        console.log('-----------------------------------------')
        console.log('Numero de ficha: ' + indice)
        console.log('Nombre mascota: ' + elemento._nombre())
        console.log('Edad: ' + elemento._edad())
        console.log('Chip: ' + elemento._chip())
        console.log('Diagnostico: ' + elemento._diagnostico())
    })
}

function Mascota(nombreMascota, edadMascota, chip, diagnostico){
    this._nombre = function(){
        return nombreMascota
    }
    this._edad = function(){
        return edadMascota
    }
    this._chip = function(){
        return chip
    }
    this._diagnostico = function(){
        return diagnostico
    }
}

Mascota.prototype.setNombre = function(nombreMascota){
    this._nombre = function(){
        return nombreMascota
    }
}

Mascota.prototype.setEdad = function(edadMascota){
    this._edad = function(){
        return edadMascota
    }
}

Mascota.prototype.setChip = function(chipMascota){
    this._chip = function(){
        return chipMascota
    }
}

Mascota.prototype.setDiagnostico = function(diagnositicoMascota){
    this._diagnostico =  function(){
        return diagnositicoMascota
    }
}

Mascota.prototype.getNombre = function(){
    return this._nombre()
}

Mascota.prototype.getEdad = function(){
    return this._edad()
}

Mascota.prototype.getChip = function(){
    return this._chip()
}

Mascota.prototype.getDiagnostico = function(){
    return this._diagnostico()
}


var mascotaUno = new Mascota('mascota 1', '2 meses', 'si', 'michu enfermito')
var mascotaDos = new Mascota('mascota 2', '6 meses', 'no', 'sanito')

var clinica = new Veterinaria('Veterinaria Animalitos', [mascotaUno, mascotaDos])

console.log(mascotaUno.getNombre())
console.log(mascotaDos.getNombre())
mascotaDos.setDiagnostico('covid')
clinica.getMascota()