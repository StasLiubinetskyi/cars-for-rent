// LoadMore.styled.js
import styled from 'styled-components';

export const ButtonLoadMore = styled.div`
    margin-top: 100px;
    margin-bottom: 150px;
    align-items: center;  
    cursor: pointer;
    transition: background-color 0.3s; /* Додано анімацію для плавного переходу */
    
    &:hover {
        background-color: #f0f0f0; /* Колір фону при ховері */
    }

    &:hover ${Text} {
        color: #ff5733; /* Колір тексту при ховері */
    }
`;

export const Text = styled.p`
    color: #3470ff;
    font-size: 16px;
    font-style: normal;
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0;
    text-transform: none;
    margin: 0;  
    transition: color 0.3s; /* Додано анімацію для плавного переходу кольору тексту */
`;
