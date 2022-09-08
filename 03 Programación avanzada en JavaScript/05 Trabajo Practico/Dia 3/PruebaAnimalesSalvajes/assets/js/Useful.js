let useful = (() => {

    const animal = () => {
        return document.querySelector('#animal')
    }

    const edad = () => {
        return document.querySelector('#edad')
    }

    const comentarios = () => {
        return document.querySelector('#comentarios')
    }

    const preview = () => {
        return document.querySelector('#preview')
    }

    // lIMPIA DATOS
    const clean = () => {
        animal().value = ''
        edad().value = ''
        comentarios().value = ''
        preview().style.backgroundImage = `url("assets/imgs/lion.svg")`
        preview().style.transition = '.5s ease;'
    }

    // INSERTA DIV ROW PARA RECIBIR DIV COL ANIMAL
    const addRow = () => {
        document.querySelector('#Animales').innerHTML = '<div id="filaCards" class="row"></div>'
    }

    // INSERTA DIV COL ANIMAL EN EL DIV ROW
    const insertAnimales = (listaAnimales) => {
        const animalesTemplate = document.querySelector('#filaCards')
        animalesTemplate.innerHTML = ''
        listaAnimales.forEach((element, i) => {
            animalesTemplate.innerHTML += `
                <div class="col-3 mb-5 pb-5">
                    <img class="img-fluid h-100"
                         src="assets/imgs/${element.img}"
                         alt="${element.img}"
                         onclick="mostrarEnModal(${i})"
                         data-toggle="modal"
                         data-target="#exampleModal"
                    >
                    <div class="bg-secondary">
                        <img class="w-25" src="assets/imgs/audio.svg" alt="audio.svg" onclick="emitirSonido(${i})">
                    </div>
                </div>
            `
        })
    }

    return {
        animal: () => animal(),
        edad: () => edad(),
        comentarios: () => comentarios(),
        preview: () => preview(),
        btnRegistrar: () => document.querySelector('#btnRegistrar'),
        tabla: () => document.querySelector('#Tabla'),
        clean,
        addRow,
        insertAnimales,
    };

})()

export default useful;