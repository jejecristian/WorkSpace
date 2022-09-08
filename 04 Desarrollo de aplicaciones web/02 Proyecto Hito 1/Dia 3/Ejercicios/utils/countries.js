const getCountries = async (url) => {
    const response = await fetch(`${url}/api/total`)
    return await response.json()
}

const getCountrie = async (url, location) => {
    const response = await fetch(`${url}/api/countries/${location}`)
    return await response.json()
}

export { getCountries, getCountrie }