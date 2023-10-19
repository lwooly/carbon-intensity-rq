export const svgIntensityColors = ({data}) => {

    const intensityColors = {
        'very high': 'red',
        'high' : 'amber',
        'moderate': 'yellow',
        'low': 'lightgreen',
        'very low': 'darkgreen'
    }

    console.log(intensityColors)

    const regionalData = data[0].regions

    const regionIntensities = regionalData.reduce((acc, {shortname, intensity: {index}}) => {
        return {...acc, [shortname] : intensityColors[index] }
    })

    return regionIntensities
    
}