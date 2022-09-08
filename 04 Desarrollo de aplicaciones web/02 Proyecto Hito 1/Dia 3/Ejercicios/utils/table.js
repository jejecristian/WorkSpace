const tableCountries = (data) => {
    console.log(data)
    data.sort((a,b)=> (a.toUpperCase() < b.toUpperCase() ? -1 : 1))

    const template = data.map(({location, confirmed, deaths, recovered, active})=>{
        `
        <tr>
        <td>${location}
        <td>${confirmed}
        <td>${deaths}
        <td>${recovered}
        <td>${active}
        <td><boton onclick="verDetalle('${location}')">
        </tr>
        `
    })

    document.querySelector('tbody').innerHTML = template
}



export {tableCountries}