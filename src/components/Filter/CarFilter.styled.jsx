import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 50px auto;
  max-width: auto;
  justify-content: center;
`;

export const SelectContainer = styled.div`
  display: grid;
  margin-left: 18px;
  align-items: center;
  justify-content: center;
`;

export const FilterButton = styled.button`
  background-color: #3470ff;
  color: #fff;
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  width: 136px;
  height: 48px;
  border: transparent;
  border-radius: 12px;
  margin: 0 18px;
  margin-top: 22px;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    background-color: #0b44cd;
  }
`;

export const TextFrame = styled.div`
  text-align: left;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Manrope', sans-serif;
  margin-bottom: 8px;
`;

export const SelectStyled = styled.select`
  display: flex;
  width: 224px;
  height: 48px;
  padding: 14px 89px 14px 18px;
  align-items: center;
  border: 0px solid #ccc;
  border-radius: 14px;
  background-color: #f7f7fb;

  & option {
    font-size: 16px;
    color: #80808039;
  }

  &:hover,
  &:focus {
    outline: none;
  }
`;

export const PriceSelectStyled = styled.select`
  display: flex;
  padding: 14px 28px;
  width: 125px;
  height: 48px;
  border: 0px solid #ccc;
  border-radius: 14px 14px 14px 14px;
  background-color: #f7f7fb;

  & option {
    font-size: 16px;
    color: #80808039;
  }

  &:hover,
  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
`;

const commonInputStyles = `
  padding: 10px;
  font-size: 16px;
  border: 0px solid #ccc;
  width: 160px;
  height: 48px;
  background-color: #f7f7fb;
  color: black; 

  &:hover,
  &:focus {
    outline: none;
  }
`;

export const FirstInput = styled.input`
  ${commonInputStyles}
  border-right: 1px solid #ddddd9;
  border-radius: 12px 0 0 12px;
  &::placeholder {
    color: black;
  }
`;

export const SecondInput = styled.input`
  ${commonInputStyles}
  border-radius: 0 12px 12px 0;
  &::placeholder {
    color: black;
  }
`;

export const MileageSelectStyled = styled.div`
  ${FirstInput},
  ${SecondInput} {
    margin-right: 0px;
  }
`;
