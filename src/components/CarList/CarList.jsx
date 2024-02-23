import React, { useState } from 'react';
import FilterByMake from '../Filter/FilterByMake';
import CarCard from '../CarAdvert/CarAdvert';
import { CarsList, CarsListContainer, CarCardWrapper } from './CarList.styled';

const CarList = ({ data }) => {
    const [filteredMake, setFilteredMake] = useState('');

    const handleFilterChange = (make) => {
        setFilteredMake(make);
    };

    const filteredCars = filteredMake
        ? data.filter((car) => car.make === filteredMake)
        : data;

    return (
        <CarsListContainer>
            <FilterByMake onFilterChange={handleFilterChange} />
            <CarsList>
                {filteredCars.length > 0 ? (
                    filteredCars.map((car) => (
                        <CarCardWrapper key={car.id}>
                            <CarCard data={car} />
                        </CarCardWrapper>
                    ))
                ) : (
                    <p>There are no ads for the selected brand</p>
                )}
            </CarsList>
        </CarsListContainer>
    );
};

export default CarList;