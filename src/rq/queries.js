
export const fetchRegional = async() => {
    const response = await fetch('https://api.carbonintensity.org.uk/regional')
    if (!response.ok) {
        console.log(await response.json())
        throw new Error('Failed to fetch regional carbon intensity data')
    }
    return await response.json()
}