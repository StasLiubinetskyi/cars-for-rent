import React, { useState } from 'react';
import FilterByMake from '../Filter/CarFilter';
import CarCard from '../CarAdvert/CarAdvert';
import LoadMore from '../LoadMore/LoadMore';
import {
  CarsList,
  CarsListContainer,
  CarCardWrapper,
  NoResultsMessage,
} from './CarList.styled';

const CarList = ({ data }) => {
  const [filteredMake, setFilteredMake] = useState('');
  const [filteredPrice, setFilteredPrice] = useState('');
  const [visibleAds, setVisibleAds] = useState(12);

  const handleFilterChange = (make, price) => {
    setFilteredMake(make);
    setFilteredPrice(price);
  };

  const loadMore = () => {
    setVisibleAds(prevVisibleAds => prevVisibleAds + 12);
  };

  const filteredCars = data.filter(car => {
    if (filteredMake && car.make !== filteredMake) {
      return false;
    }
    if (
      filteredPrice !== '' &&
      (parseFloat(car.rentalPrice) < parseFloat(filteredPrice) ||
        parseFloat(car.rentalPrice) > parseFloat(filteredPrice))
    ) {
      return false;
    }
    return true;
  });

  return (
    <CarsListContainer>
      <FilterByMake onFilterChange={handleFilterChange} />
      <CarsList>
        {filteredCars.length === 0 ? (
          <NoResultsMessage>
            No cars found for the selected make and price.
          </NoResultsMessage>
        ) : (
          filteredCars.slice(0, visibleAds).map(car => (
            <CarCardWrapper key={car.id}>
              <CarCard data={car} />
            </CarCardWrapper>
          ))
        )}
      </CarsList>
      {visibleAds < filteredCars.length && <LoadMore onClick={loadMore} />}
    </CarsListContainer>
  );
};

export default CarList;
