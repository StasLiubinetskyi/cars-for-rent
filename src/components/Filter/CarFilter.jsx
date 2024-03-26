import React, { useState } from 'react';
import makes from '../../data/makes.json';
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

  const handleMakeChange = event => {
    setSelectedMake(event.target.value);
  };

  const handlePriceChange = event => {
    setSelectedPrice(event.target.value);
  };

  const handleMinMileageChange = event => {
    setMinMileage(event.target.value);
  };

  const handleMaxMileageChange = event => {
    setMaxMileage(event.target.value);
  };

  const handleFilterClick = () => {
    onFilterChange(selectedMake, selectedPrice, minMileage, maxMileage);
  };

  const generatePriceOptions = () => {
    const priceOptions = [];
    for (let price = 1; price <= 50; price++) {
      priceOptions.push({
        value: price * 5,
        label: `${price * 5} $`,
      });
    }
    return priceOptions;
  };

  const makesOptions = makes.map((make, index) => (
    <option key={index} value={make}>
      {make}
    </option>
  ));

  return (
    <FilterContainer>
      <SelectContainer>
        <TextFrame>
          <p>Car brand</p>
        </TextFrame>
        <SelectStyled value={selectedMake} onChange={handleMakeChange}>
          <option value="" disabled hidden>
            Enter the text
          </option>
          {makesOptions}
        </SelectStyled>
      </SelectContainer>

      <SelectContainer>
        <TextFrame>Price / 1 hour</TextFrame>
        <PriceSelectStyled value={selectedPrice} onChange={handlePriceChange}>
          <option value="" disabled hidden>
            To $
          </option>
          {generatePriceOptions().map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
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
            onChange={handleMinMileageChange}
          />
          <SecondInput
            type="number"
            id="SecondInput"
            placeholder="To"
            value={maxMileage}
            onChange={handleMaxMileageChange}
          />
        </MileageSelectStyled>
      </InputContainer>

      <FilterButton onClick={handleFilterClick}>Search</FilterButton>
    </FilterContainer>
  );
};

export default CarFilter;
