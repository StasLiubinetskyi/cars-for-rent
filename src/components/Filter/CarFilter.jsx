import React, { useState } from 'react';
import makes from '../../data/makes.json';
import {
    FilterButton,
    FilterButtonContainer,
    BrandFrame,
    BrandText,
    FrameBrand,
    SelectStyled,
} from './CarFilter.styled';

const CarFilter = ({ onFilterChange }) => {
    const [selectedMake, setSelectedMake] = useState('');

    const handleMakeChange = (event) => {
        setSelectedMake(event.target.value);
    };

    const handleFilterClick = () => {
        onFilterChange(selectedMake);
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
                        placeholder="Enter the text"
                    >
                        {makesOptions}
                    </SelectStyled>
                </FrameBrand>
                <FilterButton onClick={handleFilterClick}>Search</FilterButton>
            </FilterButtonContainer>
        </div>
    );
};

export default CarFilter;
