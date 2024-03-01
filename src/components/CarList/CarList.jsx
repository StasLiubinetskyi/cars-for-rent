import React, { useState } from 'react';
import FilterByMake from '../Filter/CarFilter/CarFilter';
import CarCard from '../CarAdvert/CarAdvert';
import LoadMore from '../LoadMore/LoadMore';
import { CarsList, CarsListContainer, CarCardWrapper, NoResultsMessage } from './CarList.styled';

const CarList = ({ data }) => {
    const [filteredMake, setFilteredMake] = useState('');
    const [visibleAds, setVisibleAds] = useState(12);

    const handleFilterChange = (make) => {
        setFilteredMake(make);
    };

    const filteredCars = filteredMake
        ? data.filter((car) => car.make === filteredMake)
        : data;

    const loadMore = () => {
        setVisibleAds((prevVisibleAds) => prevVisibleAds + 12);
    };

    return (
        <CarsListContainer>
            <FilterByMake onFilterChange={handleFilterChange} />
            <CarsList>
                {filteredCars.length === 0 ? (
                    <NoResultsMessage>No cars found for the selected make.</NoResultsMessage>
                ) : (
                    filteredCars.slice(0, visibleAds).map((car) => (
                        <CarCardWrapper key={car.id}>
                            <CarCard data={car} />
                        </CarCardWrapper>
                    ))
                )}
            </CarsList>
            {visibleAds < filteredCars.length && (
                <LoadMore onClick={loadMore} />
            )}
        </CarsListContainer>
    );
};

export default CarList;
