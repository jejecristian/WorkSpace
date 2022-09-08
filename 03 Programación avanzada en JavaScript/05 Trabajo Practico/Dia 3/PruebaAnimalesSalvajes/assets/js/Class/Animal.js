export default class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        let _nombre = nombre
        this._getNombre = () => _nombre
        this._setNombre = (nombre) => nombre != '' ? _nombre = nombre : _nombre = 'Leon'

        let _edad = edad
        this._getEdad = () => _edad
        this._setEdad = (edad) => edad != '' ? _edad = edad : _edad = '0 - 1 años'

        let _img = img
        this._getImg = () => _img
        this._setImg = (img) => img != '' ? _img = img : _img = 'Leon.png'

        let _comentarios = comentarios
        this._getComentarios = () => _comentarios
        this._setComentarios = (comentarios) => _comentarios != '' ? _comentarios = comentarios : _comentarios = 'Este es un leon'

        let _sonido = sonido
        this._getSonido = () => sonido
        this._setSonido = (sonido) => _sonido != '' ? _sonido = sonido : _sonido = 'Rugido.mp3'
    }

    // getters y setters
    get nombre() {
        return this._getNombre()
    }
    set nombre(nombre) {
        this._setNombre(nombre)
    }

    get edad() {
        return this._getEdad()
    }
    set edad(edad) {
        this._setEdad(edad)
    }

    get img() {
        return this._getImg()
    }
    set img(img) {
        this._setImg(img)
    }

    get comentarios() {
        return this._getComentarios()
    }
    set comentarios(comentarios) {
        this._setComentarios(comentarios)
    }

    get sonido() {
        return this._getSonido()
    }
    set sonido(sonido) {
        this._setSonido(sonido)
    }
}