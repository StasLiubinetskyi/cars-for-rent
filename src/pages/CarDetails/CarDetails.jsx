import React from 'react'
import { useParams } from "react-router-dom";


const CarDetails = () => {
    const { id } = useParams();
    return (
        <div>Car Details {id} </div>
    )
}

export default CarDetails