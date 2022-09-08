// VALIDA DATOS
let validator = (() => {
    const verify = (animal, edad, comentarios) => {

        if (!animal.trim()) {
            alert('No se ha indicado el animal')
            return true
        }

        if (!edad.trim()) {
            alert('No se ha indicado la edad')
            return true
        }

        if (!comentarios.trim()) {
            alert('No se ha indicado comentarios')
            return true
        }

        return false
    }
    return { verify }
})()

export default validator;