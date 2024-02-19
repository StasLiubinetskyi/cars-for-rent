import styled from 'styled-components';

export const CarContainer = styled.li`
  width: 274px;
  list-style: none;
  border-radius: 14px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    transform: scale(1.01);
  }
`;

export const BtnFavorite = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  width: 20px;
  height: 20px;
  display: flex;
  background-color: transparent;
  border: transparent;
  padding: 0;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
`;

export const FavoriteSvg = styled.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: white;
  fill: transparent;
`;

export const CarImg = styled.img`
  border-radius: 14px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 14px;
  transition: box-shadow 250ms;
  
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  color: #121417;
  margin-bottom: 8px;
`;

export const CarNameAccent = styled.span`
  color: #3470ff;
`;


export const CarInfoItem = styled.li`
  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 4px;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 6px;
    padding-right: 6px;
    border-right: 2px solid rgba(18, 20, 23, 0.1);
  }

  & > p {
    
    text-align: start;
  }
`;


export const CarInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: #88898b;
  margin-bottom: 4px;
  
`;


export const NextCarInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: #88898b;
  margin-bottom: 24px;
  
  `;

export const LearnMoreBtn = styled.button`
  background-color: #3470ff;
  color: #fff;
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  width: 274px;
  height: 44px;
  border: transparent;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const CarDescription = styled.p`
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 400;
  color: #121417;
  margin-bottom: 14px;
  margin-top: 14px;
`;

export const CardSubtitle = styled.p`
  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.25;
  color: #121417;
  margin-bottom: 8px;
  text-align: left;
  display: block;
  width: 50%;
`;



export const RentalConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
`;

export const ConditionItemWrapper = styled.div`
  display: flex;
  
`;

export const ConditionItem = styled.li`
  font-family: 'Manrope';
  font-size: 12px;
  line-height: 1.5;
  color: #363535;
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
`;

export const AccentItem = styled.span`
  font-family: 'Manrope';
  color: #3470ff;
  font-weight: 600;
`;

export const RentalBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3470ff;
  color: #fff;
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  width: 168px;
  height: 44px;
  border-radius: 12px;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    background: #0b44cd;
  }
`;