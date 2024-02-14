import { StyledLink } from '../../pages/HomePage/HomePage.styled';
import { EmptyContainer, EmptyText } from './FavoriteEmpty.styled';

const FavoriteEmpty = () => {
    return (
        <EmptyContainer>
            <EmptyText>
                You havn't cars in favorites yet. Go to the{' '}
                <StyledLink to="catalog">Catalog</StyledLink>
            </EmptyText>
        </EmptyContainer>
    );
};

export default FavoriteEmpty;