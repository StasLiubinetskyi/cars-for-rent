import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from '../../data/img/backgroundImages.jpg';

export const WrapperHomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${backgroundImage});
`;

export const HomeContainer = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: 750px;
  gap: 25px;
  margin: auto;
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.1);
  padding: 25px;
`;

export const HomeTitle = styled.h1`
  color: white;
  font-size: 48px;
  text-shadow: 0 0 2px black;
`;

export const HomeText = styled.p`
  color: white;
  font-size: 24px;
  align-self: center;
  text-shadow: 0 0 2px black;
`;

export const StyledLink = styled(Link)`
  font-size: 24px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  color: #3470ff;

  &:hover {
    color: #0b44cd;
  }

  text-shadow: 0 0 2px black;
`;
