import React, { useState } from 'react';
import CarFilter from '../Filter/CarFilter';
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
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [visibleAds, setVisibleAds] = useState(12);

  const handleFilterChange = (make, price, minMileage, maxMileage) => {
    setFilteredMake(make);
    setFilteredPrice(price);
    setMinMileage(minMileage);
    setMaxMileage(maxMileage);
  };

  const loadMore = () => {
    setVisibleAds(prevVisibleAds => prevVisibleAds + 12);
  };

  const filteredCars = data.filter(car => {
    const priceInRange =
      !filteredPrice ||
      (parseFloat(car.rentalPrice.slice(1)) >= parseFloat(filteredPrice) &&
        parseFloat(car.rentalPrice.slice(1)) <= parseFloat(filteredPrice));

    const makeMatches = !filteredMake || car.make === filteredMake;

    const mileageInRange =
      (!minMileage || parseFloat(car.mileage) >= parseFloat(minMileage)) &&
      (!maxMileage || parseFloat(car.mileage) <= parseFloat(maxMileage));

    return priceInRange && makeMatches && mileageInRange;
  });

  return (
    <CarsListContainer>
      <CarFilter onFilterChange={handleFilterChange} />{' '}
      <CarsList>
        {filteredCars.length === 0 ? (
          <NoResultsMessage>
            No cars found for the selected make, price, and mileage.
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
