import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/favorite/selectorsFavorite';
import CarCard from '../../components/CarAdvert/CarAdvert';
import FavoriteEmpty from '../../components/FavoriteEmpty/FavoriteEmpty';
import { FavoriteContainer } from './FavoritesPage.styled';

const Favorites = () => {
  const favorite = useSelector(selectFavorite);

  return (
    <>
      <FavoriteContainer>
        {favorite.length === 0 ? (
          <FavoriteEmpty />
        ) : (
          favorite.map(car => <CarCard data={car} key={car.id} />)
        )}
      </FavoriteContainer>
    </>
  );
};

export default Favorites;