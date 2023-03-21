export const searchByZipCode = async (zipCode) => {
    const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`)
    const data = await response.json()

    if (!data || !data.places || data.places.length === 0) {
        return null
    }

    const place = data.places[0]

    return {
        state: place.state,
        city: place['place name'],
    }
}

export const lookupIPInfo = async () => {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()

    if (!data) {
        return null
    }

    return {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country,
        isp: data.org,
    }
}
