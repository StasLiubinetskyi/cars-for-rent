
import styled from 'styled-components';

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
    margin-top: 22px;
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
    max-width: 600px; 
    justify-content: space-evenly
`;

export const SelectStyled = styled.select`
    gap: 32px;
    width: 100%;
    display: flex;
    padding: 14px 89px 14px 18px;
    position: relative;
    max-width: 224px;
    box-sizing: border-box;
    align-items: center;
    border-radius: 14px 14px 14px 14px;
    justify-content: center;
    background-color: #f7f7fb;

    &:hover,
    &:focus {
        outline: none;
    }
`;

export const CarBrand = styled.p`
    color: #8a8a89;
    font-size: 14px;
    font-style: normal;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0;
    text-transform: none;
    margin-top: 0;
    text-align: left;
    margin-bottom: 0;
`;

export const BrandFrame = styled.div`
    margin-top: 0;
    text-align: left;
    margin-bottom: 0;
`;

export const BrandText = styled.div`
    color: #8a8a89;
    font-size: 14px;
    font-style: normal;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0;
    text-transform: none;
    margin-bottom: 8px;
`;

export const FrameBrand = styled.div``;

export const PriceSelectStyled = styled.select`
    gap: 32px;
    width: 100%;
    display: flex;
    padding: 14px 28px;
    position: relative;
    max-width: 125px;
    box-sizing: border-box;
    align-items: center;
    border-radius: 14px 14px 14px 14px;
    justify-content: center;
    background-color: #f7f7fb;

    &:hover,
    &:focus {
        outline: none;
    }
`;

export const PriceSelectContainer = styled.div`
    display: grid;
    align-items: center;
`;

export const PriceText = styled.div`
  margin-top: 0;
  text-align: left;
  margin-bottom: 0;
  color: #8a8a89;
  margin-bottom: 8px;
  font-size: 14px;
  font-style: normal;
  font-family: "Manrope",sans-serif;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0;
  text-transform: none;
`;
