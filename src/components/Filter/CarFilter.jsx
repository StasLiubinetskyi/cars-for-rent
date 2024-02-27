import React, { useState } from 'react';
import Select from 'react-select';
import makes from '../../data/makes.json';
import { FilterButton, FilterButtonContainer, BrandFrame, BrandText, FrameBrand } from './CarFilter.styled';

const CarFilter = ({ onFilterChange }) => {
    const [selectedMake, setSelectedMake] = useState('');

    const handleMakeChange = (selectedOption) => {
        setSelectedMake(selectedOption.value);
    };

    const handleFilterClick = () => {
        onFilterChange(selectedMake);
    };

    const makesOptions = makes.map((make, index) => ({
        value: make,
        label: make,
    }));

    return (
        <div>
            <FilterButtonContainer>
                <FrameBrand>
                    <BrandFrame>
                        <BrandText><p>Car brand</p></BrandText>
                    </BrandFrame>
                <Select
                    value={makesOptions.find((option) => option.value === selectedMake)}
                    onChange={handleMakeChange}
                    options={makesOptions}
                    placeholder="Enter the text"
                    classNamePrefix="select"
                    />
                </FrameBrand>
                <FilterButton onClick={handleFilterClick}>Search</FilterButton>
            </FilterButtonContainer>
        </div>
    );
};

export default CarFilter;