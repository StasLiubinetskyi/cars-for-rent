
import React, { useState } from 'react';
import Select from 'react-select';
import makes from '../../data/makes.json';
import { FilterButton, FilterButtonContainer } from './FilterByMake.styled';

const FilterByMake = ({ onFilterChange }) => {
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
                <Select
                    value={makesOptions.find((option) => option.value === selectedMake)}
                    onChange={handleMakeChange}
                    options={makesOptions}
                    placeholder="Enter the text"
                    classNamePrefix="select"
                />
                <FilterButton onClick={handleFilterClick}>Search</FilterButton>
            </FilterButtonContainer>
        </div>
    );
};

export default FilterByMake;
