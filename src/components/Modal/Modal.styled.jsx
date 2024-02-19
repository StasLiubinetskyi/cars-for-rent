import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const ModalCard = styled.div`

  max-width: 541px;
  
  background: #ffffff;
  border-radius: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 14px;
  right: 14px;
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  border-radius: 50%;
  border: transparent;
  background: transparent;
  font-size: 36px;
  color: #121417;
  &:hover {
    background: #dcecf8;
  }
`;
export const CloseSvg = styled.svg`
  stroke: #121417;
  width: 24px;
  height: 24px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    stroke: #3470ff;
    scale: 1.03;
  }
`;