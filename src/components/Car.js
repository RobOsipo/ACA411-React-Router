import React from 'react'
import cars from '../cars.json'
import Card from './Card/Card'
import Chip from '@material-ui/core/Chip';
// import Stack from '@mui/material/Stack';

// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    const carId = props.match.params.id
    const foundCar = cars.find(car => car.id == carId)
    console.log(foundCar)
    // ! Material UI wont work even after trying ALL of these https://stackoverflow.com/questions/69429172/module-not-found-cant-resolve-mui-material-utils-v5-which-included-a-na
    return (
        <Card>
            {/* <Stack direction="row" spacing={1}>
                <Chip label={foundCar.Name} />
                <Chip label={foundCar.Year} />
                <Chip label={foundCar.Acceleration} />
                <Chip label={foundCar.Miles_per_Gallon} />
                <Chip label={foundCar.Cylinders} />
                <Chip label={foundCar.Displacement} />
                <Chip label={foundCar.Weight_in_lbs} />
                
            </Stack> */}

                <Chip label={`Name: ${foundCar.Name}`} />
                <Chip label={`Year: ${foundCar.Year}`} />
                <Chip label={`Acceleration: ${foundCar.Acceleration}`} />
                <Chip label={`MPG: ${foundCar.Miles_per_Gallon}`} />
                <Chip label={`Cylinders: ${foundCar.Cylinders}`} />
                <Chip label={`Displacement: ${foundCar.Displacement}`} />
                <Chip label={`Weight: ${foundCar.Weight_in_lbs}`} />

            {/* <h1>{foundCar.Name}</h1>
            <h3>Origin: {foundCar.Origin}</h3>
            <h3>Year: {foundCar.Year}</h3>
            <h3>Acceleration: {foundCar.Acceleration}</h3>
            <h3>MPG: {foundCar.Miles_per_Gallon} </h3>
            <h3>Cylinders: {foundCar.Cylinders} </h3>
            <h3>Displacement: {foundCar.Displacement}</h3>
            <h3>Weight: {foundCar.Weight_in_lbs}</h3> */}
        </Card>
    )
}

export default Car