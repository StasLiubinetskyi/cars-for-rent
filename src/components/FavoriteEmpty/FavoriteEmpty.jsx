import React from 'react';
import { EmptyContainer, EmptyText, StyledCatalogLink } from './FavoriteEmpty.styled';

const FavoriteEmpty = () => {
    return (
        <EmptyContainer>
            <EmptyText>
                You haven't added any cars to favorites yet. Go to the{' '}
                <StyledCatalogLink to="/catalog">Catalog</StyledCatalogLink>
            </EmptyText>
        </EmptyContainer>
    );
};

export default FavoriteEmpty;
