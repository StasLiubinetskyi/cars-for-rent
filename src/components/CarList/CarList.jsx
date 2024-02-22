import React, { useState } from 'react';
import FilterByMake from '../Filter/FilterByMake';
import CarCard from '../CarAdvert/CarAdvert';
import { CarsList } from './CarList.styled';

const CarList = ({ data }) => {
    const [filteredMake, setFilteredMake] = useState('');

    const handleFilterChange = (make) => {
        setFilteredMake(make);
    };

    const filteredCars = filteredMake
        ? data.filter((car) => car.make === filteredMake)
        : data;

    return (
        <div>
            <FilterByMake onFilterChange={handleFilterChange} />
            <CarsList>
                {filteredCars.length > 0 ? (
                    filteredCars.map((car) => (
                        <CarCard data={car} key={car.id} />
                    ))
                ) : (
                    <p>There are no ads for the selected brand</p>
                )}
            </CarsList>
        </div>
    );
};

export default CarList;
