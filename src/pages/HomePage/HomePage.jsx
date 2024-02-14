import {
  HomeContainer,
  WrapperHomePage,
  HomeText,
  HomeTitle,
  StyledLink
} from './HomePage.styled';

const Home = () => {
  return (
    <WrapperHomePage>
    <HomeContainer>
      <HomeTitle>Welcome to Car Rental Service</HomeTitle>
      <HomeText>
          Explore a world of convenience with our Car Rental Service application.
          Whether you're planning a weekend getaway or a business trip, we've got
          the perfect car for your needs.
        </HomeText>
        <HomeText>
          Browse through our catalog to discover a variety of cars, each equipped
          to make your journey comfortable and enjoyable. Save your favorite cars
          for quick access in the future.
      </HomeText>
      <HomeText>
        Ready to start your adventure?
        Navigate through our app using the
        buttons <StyledLink to="catalog">Catalog</StyledLink>
      </HomeText>
      </HomeContainer>
    </WrapperHomePage>
  );
};

export default Home;
