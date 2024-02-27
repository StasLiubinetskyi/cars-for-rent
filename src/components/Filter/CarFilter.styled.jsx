
import styled from 'styled-components';
import Select from 'react-select';

export const FilterButton = styled.button`
  background-color: #3470ff;
  color: #fff;
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  width: 126px;
  height: 48px;
  border: transparent;
  border-radius: 12px;
  margin: 0 18px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    background-color: #0b44cd;
  }
`;

export const FilterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-left: auto; 
  margin-right: auto; 
  justify-content: center; 

  select {
    width: 224px;
    height: 48px;
    padding: 14px 18px;
    border: 0;
    border-radius: 14px;
    background-color: #f7f7fb;
    color: #121417;
    font-family: 'Manrope';
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    cursor: pointer;
    margin-right: 18px;

    &:hover,
    &:focus {
      outline: none;
    }
  }
`;

export const ModelSelect = styled(Select)`
  .select__control {
    min-width: 224px;
    height: 48px;
  }
`;

export const CarBrand = styled.p`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-family: "Manrope",sans-serif;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0;
  text-transform: none;
  margin-top: 0;
  text-align: left;
  margin-bottom: 0
  
`


export const BrandFrame = styled.div`
 margin-top: 0;
  text-align: left;
  margin-bottom: 0;
`;

export const BrandText = styled.div`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-family: "Manrope",sans-serif;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0;
  text-transform: none;
`;
export const FrameBrand = styled.div`
`;