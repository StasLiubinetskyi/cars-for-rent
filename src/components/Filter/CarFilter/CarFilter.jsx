import React, { useState } from 'react';
import makes from '../../../data/makes.json';

import {
    FilterButton,
    FilterContainer,
    TextFrame,
    SelectStyled,
    PriceSelectStyled,
    SelectContainer,
    MileageSelectStyled
} from './CarFilter.styled';

const CarFilter = ({ onFilterChange, onPriceChange }) => {
    const [selectedMake, setSelectedMake] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleMakeChange = (event) => {
        setSelectedMake(event.target.value);
    };

    const handlePriceChange = (event) => {
        const newValue = event.target.value === 'all' ? '' : event.target.value;
        setSelectedPrice(newValue);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFilterClick = () => {
        onFilterChange(selectedMake, selectedPrice);
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
                <SelectStyled
                    value={selectedMake}
                    onChange={handleMakeChange}
                >
                    <option value="" disabled hidden>
                        Enter the text
                    </option>
                    {makesOptions}
                </SelectStyled>
            </SelectContainer>

            <SelectContainer>
                <TextFrame>
                    <p>Price / 1 hour</p>
                </TextFrame>
                <PriceSelectStyled
                    value={selectedPrice}
                    onChange={handlePriceChange}
                >
                    <option value="" disabled hidden>
                        To $
                    </option>
                    <option value="all">All</option>
                    {[...Array(50).keys()].map((price) => (
                        <option key={price + 1} value={(price + 1) * 5}>
                            {(price + 1) * 5} $
                        </option>
                    ))}
                </PriceSelectStyled>
            </SelectContainer>

            <SelectContainer>
                <TextFrame>
                    <p>Car mileage / km </p>
                </TextFrame>
                <MileageSelectStyled>
                    <input
                        type="number"
                        id="simpleInput"
                        value={inputValue}
                        onChange={handleInputChange}

                    />
                </MileageSelectStyled>
                <MileageSelectStyled>
                    <input
                        type="number"
                        id="simpleInput"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </MileageSelectStyled>
            </SelectContainer>

            <FilterButton onClick={handleFilterClick}>Search</FilterButton>
        </FilterContainer >
    );
};

export default CarFilter;
