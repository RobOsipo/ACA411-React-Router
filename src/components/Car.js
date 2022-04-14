import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    const carId = props.match.params.id
    const foundCar = cars.find(car => car.id == carId)
    console.log(foundCar)
    // ! Console log found car and style with material ui to make look like photo in read me
    // TODO import material ui and render the information with one of their components
    return (
        <>
            <h1>{foundCar.Name}</h1>
            <h3>Origin: {foundCar.Origin}</h3>
            <h3>Year: {foundCar.Year}</h3>
        </>
    )
}

export default Car