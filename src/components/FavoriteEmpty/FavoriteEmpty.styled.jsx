import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EmptyContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const EmptyText = styled.div`
  font-size: 24px;
  color: #8a8a89;
  text-align: center;
`;

export const StyledCatalogLink = styled(Link)`
  font-size: 24px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  color: #3470ff;

  &:hover {
    color: #0b44cd;
  }

  text-shadow: 0 0 2px black;
`;
