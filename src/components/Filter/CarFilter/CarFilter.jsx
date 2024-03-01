import React, { useState } from 'react';
import makes from '../../../data/makes.json';

import {
    FilterButton,
    FilterButtonContainer,
    BrandFrame,
    BrandText,
    FrameBrand,
    SelectStyled,
    PriceSelectContainer,
    PriceText,
    PriceSelectStyled,
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
        <div>
            <FilterButtonContainer>
                <FrameBrand>
                    <BrandFrame>
                        <BrandText>
                            <p>Car brand</p>
                        </BrandText>
                    </BrandFrame>
                    <SelectStyled
                        value={selectedMake}
                        onChange={handleMakeChange}
                    >
                        <option value="" disabled hidden>
                            Enter the text
                        </option>
                        {makesOptions}
                    </SelectStyled>
                </FrameBrand>
                <PriceSelectContainer>
                    <PriceText>
                        <p>Price/ 1 hour</p>
                    </PriceText>
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
                </PriceSelectContainer>

                <div>
                    <BrandText htmlFor="simpleInput">Сar mileage / km</BrandText>
                    <input
                        type="text"
                        id="simpleInput"
                        value={inputValue}
                        onChange={handleInputChange}
                    />

                </div>
                <FilterButton onClick={handleFilterClick}>Search</FilterButton>
            </FilterButtonContainer>
        </div>
    );
};

export default CarFilter;
