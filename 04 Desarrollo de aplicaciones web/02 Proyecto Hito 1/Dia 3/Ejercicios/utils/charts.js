const chartCountries = (data) => {
    console.log(data)
    const countriesData = data.sort((a, b) => b.confirmed - a.confirmed).slice(0, 10)
    console.log(countriesData)

    const labelArr = []
    const confirmedArr = []
    const deathsArr = []
    countriesData.forEach(({location, confirmed, deaths})=>{
        labelArr.push(location)
        confirmedArr.push(confirmed)
        deathsArr.push(deaths)
    })

    const data = {
        labels: labelArr,
        datasets: [
            {
                label: 'Confirmed',
                data: confirmedArr,
                borderColor: 'rgba(255, 99, 64)',
                backgroundColor: 'rgba(255, 99, 64, 0.3)',
            },
            {
                label: 'Deaths',
                data: deathsArr,
                borderColor: 'rgba(255, 99, 132, 0.2)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart'
                }
            }
        },
    };

    new Chart(document.querySelector('graficoMundial'), config)

}

const chartCountrie = (data) => {
    console.log(data)
    //PINTAR EL GRAFICO CIRCULAR
}

export { chartCountries, chartCountrie}