import React, { useState } from 'react';
import makes from '../../data/makes.json';
import prices from '../../data/prices.json';
import {
  FilterButton,
  FilterContainer,
  TextFrame,
  SelectStyled,
  PriceSelectStyled,
  SelectContainer,
  MileageSelectStyled,
  InputContainer,
  SecondInput,
  FirstInput,
} from './CarFilter.styled';

const CarFilter = ({ onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const handleInputChange = setter => event => {
    setter(event.target.value);
  };

  const handleFilterClick = () => {
    onFilterChange(selectedMake, selectedPrice, minMileage, maxMileage);
  };

  const makesOptions = makes.map((make, index) => (
    <option key={index} value={make}>
      {make}
    </option>
  ));

  const priceOptions = prices.map(price => (
    <option key={price.value} value={price.value}>
      {price.label}
    </option>
  ));

  return (
    <FilterContainer>
      <SelectContainer>
        <TextFrame>
          <p>Car brand</p>
        </TextFrame>
        <SelectStyled
          value={selectedMake}
          onChange={handleInputChange(setSelectedMake)}
        >
          <option value="">Enter the text</option>
          {makesOptions}
        </SelectStyled>
      </SelectContainer>

      <SelectContainer>
        <TextFrame>Price / 1 hour</TextFrame>
        <PriceSelectStyled
          value={selectedPrice}
          onChange={handleInputChange(setSelectedPrice)}
        >
          <option value="">To $</option>
          {priceOptions}
        </PriceSelectStyled>
      </SelectContainer>

      <InputContainer>
        <TextFrame>Car mileage / km</TextFrame>
        <MileageSelectStyled>
          <FirstInput
            type="number"
            id="FirstInput"
            placeholder="From"
            value={minMileage}
            onChange={handleInputChange(setMinMileage)}
          />
          <SecondInput
            type="number"
            id="SecondInput"
            placeholder="To"
            value={maxMileage}
            onChange={handleInputChange(setMaxMileage)}
          />
        </MileageSelectStyled>
      </InputContainer>

      <FilterButton onClick={handleFilterClick}>Search</FilterButton>
    </FilterContainer>
  );
};

export default CarFilter;
