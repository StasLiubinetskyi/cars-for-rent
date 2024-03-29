import styled from 'styled-components';

export const CarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  width: 100%;
  max-width: 1184px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
  
  & > p {
    margin: 0 auto;
  }
`;

export const CarsListContainer = styled.div`
  text-align: center; 
`;

export const CarCardWrapper = styled.div`
  box-sizing: border-box;
  text-align: left;
`;

export const NoResultsMessage = styled.p`
  font-size: 18px;
  color: red;
  margin: 20px 0;
`;
