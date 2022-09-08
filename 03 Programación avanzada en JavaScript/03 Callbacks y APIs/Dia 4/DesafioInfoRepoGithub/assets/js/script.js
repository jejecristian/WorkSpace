const urlBase = 'https://api.github.com/users/';

const getUser = async (user) => {
    const response = await request(`${urlBase}${user}`);
    return response
}

const getRepo = async (user, pagina, cantidad_repos) => {
    const response = await request(`${urlBase}${user}/repos?page=${pagina}&per_page=${cantidad_repos}`);
    return response
}

const request = async (url) => {
    const response = await fetch(url);
    return await response.json();
}

const miFuncion = async (event) => {
    document.getElementById('resultados').innerHTML = ''
    event.preventDefault()
    const nombre = document.getElementById('nombre').value;
    const pagina = document.getElementById('pagina').value;
    const repoPagina = document.getElementById('repoPagina').value;
    try {
        const misPromesas = await Promise.all([getUser(nombre), getRepo(nombre, pagina, repoPagina)])
        if (!misPromesas[0].id) throw 'Ha ocurrido un error: usuario no existe'
        pintarDatos(misPromesas)
    } catch (error) {
        alert('Ha ocurrido un error: usuario no existe')
    }
}

const pintarDatos = (misPromesas) => {
    let divResultado = document.getElementById('resultados');
    let colIzquierda;
    let colDerecha;
    let linkRepo = '';
    let verticalScroll = 'overflow-hide'
    let margen = '';
    let arrayRepo;
    for (let i = 0; i < misPromesas.length; i++) {
        if (i == 0) {
            colIzquierda = `
                <div class="col-6">
                    <h2>Datos de Usuario</h2>
                    <img src="${misPromesas[i].avatar_url}" alt="logo">
                    <p>Nombre de usuario: ${misPromesas[i].name}</p>
                    <p>Nombre de login: ${misPromesas[i].login}</p>
                    <p>Cantidad de Repositorios: ${misPromesas[i].public_repos}</p>
                    <p>Localidad: ${misPromesas[i].location}</p>
                    <p>Tipo de usuario: ${misPromesas[i].type}</p>
                </div>
            `
        } else {
            arrayRepo = misPromesas[i]
            if (arrayRepo.length > 10) {
                verticalScroll = 'overflow-auto'
                margen = 'mr-2'
            }
            for (let j = 0; j < arrayRepo.length; j++) {
                linkRepo += `<p class=${margen}><a href="${arrayRepo[j].html_url}">${arrayRepo[j].name}</a></p>`
            }
            colDerecha = `
                <div class="col-6 text-right">
                    <h2>Nombre de repositorios</h2>
                    <div class=${verticalScroll} id='divLinks' style='max-height: 400px;'>
                        ${linkRepo}
                    </div>
                </div>
            `;
        }
    }
    divResultado.innerHTML = `
    <div class="row pb-5">
        ${colIzquierda}
        ${colDerecha}
    </div>
    `
}

const formulario = document.querySelector('form')
formulario.addEventListener('submit', miFuncion)
