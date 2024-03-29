import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/favorite/selectorsFavorite';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../redux/favorite/sliceFavorite';
import heartfillIcon from '../../data/svg/heartFill.svg';
import heartIcon from '../../data/svg/heart.svg';
import plug from '../../data/img/plug.jpg';
import Modal from '../Modal/Modal';
import {
  AccentItem,
  BtnFavorite,
  CarContainer,
  CarDescription,
  CarImg,
  CarInfoItem,
  CarInfoList,
  CarInfoListModal,
  CarNameAccent,
  CardSubtitle,
  ConditionItem,
  FavoriteSvg,
  LearnMoreBtn,
  NextCarInfoList,
  RentalBtn,
  RentalConditionsList,
  TitleWrapper,
  ConditionItemWrapper,
} from './CarAdvert.styled';

const AdvertCar = ({ data }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
  } = data;

  const [showModal, setShowModal] = useState(false);
  const favorite = useSelector(selectFavorite);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const chooseFavorite = data => {
    const isFavorite = favorite.some(car => car.id === data.id);
    if (!isFavorite) {
      dispatch(addToFavorite(data));
    } else {
      dispatch(removeFromFavorite(data));
    }
  };

  const [country, city] = address.split(', ').reverse().slice(0, 2);
  const modelFirst = model.split(' ')[0];

  const formatMileage = mileage => {
    return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <>
      <CarContainer key={id}>
        <BtnFavorite type="button" onClick={() => chooseFavorite(data)}>
          <FavoriteSvg>
            <use
              href={`${
                favorite.some(car => car.id === data.id)
                  ? heartfillIcon
                  : heartIcon
              }#heart`}
            />
          </FavoriteSvg>
        </BtnFavorite>
        <CarImg
          src={img || plug}
          alt={'Image not available'}
          width={274}
          height={268}
        />
        <TitleWrapper>
          <p>
            {make} <CarNameAccent>{modelFirst}</CarNameAccent>, {year}
          </p>
          {!showModal && rentalPrice}
        </TitleWrapper>
        <CarInfoList>
          <CarInfoItem>{city}</CarInfoItem>
          <CarInfoItem>{country}</CarInfoItem>
          <CarInfoItem>{rentalCompany}</CarInfoItem>
          <CarInfoItem>{type}</CarInfoItem>
          <CarInfoItem>{make}</CarInfoItem>
          <CarInfoItem>{id}</CarInfoItem>
          <CarInfoItem>{functionalities[0]}</CarInfoItem>
        </CarInfoList>
        <LearnMoreBtn type="button" onClick={handleOpenModal}>
          Learn more
        </LearnMoreBtn>
      </CarContainer>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <CarImg
            src={img || plug}
            alt={'Image not available'}
            width={461}
            height={248}
          />
          <TitleWrapper>
            <p>
              {make} <CarNameAccent>{model}</CarNameAccent>, {year}
            </p>
            {!showModal && rentalPrice}
          </TitleWrapper>
          <CarInfoListModal>
            <CarInfoItem>{city}</CarInfoItem>
            <CarInfoItem>{country}</CarInfoItem>
            <CarInfoItem>Id: {id}</CarInfoItem>
            <CarInfoItem>Year: {year}</CarInfoItem>
            <CarInfoItem>Type: {type}</CarInfoItem>
          </CarInfoListModal>
          <NextCarInfoList>
            <CarInfoItem>Fuel Consumption: {fuelConsumption}</CarInfoItem>
            <CarInfoItem>Engine Size: {engineSize}</CarInfoItem>
            <CarDescription>{description}</CarDescription>
            <CardSubtitle>Accessories and functionalities:</CardSubtitle>
            <CarInfoListModal>
              {accessories.map(item => (
                <CarInfoItem key={item}>{item}</CarInfoItem>
              ))}
            </CarInfoListModal>
            <NextCarInfoList>
              {functionalities.map(item => (
                <CarInfoItem key={item}>{item}</CarInfoItem>
              ))}
            </NextCarInfoList>
            <CardSubtitle> Rental Conditions:</CardSubtitle>
            <RentalConditionsList>
              <ConditionItemWrapper>
                <ConditionItem>
                  Minimum age :{' '}
                  <AccentItem>
                    {rentalConditions.split('\n')[0].match(/\d+/)}
                  </AccentItem>
                </ConditionItem>
                <ConditionItem>{rentalConditions.split('\n')[1]}</ConditionItem>
              </ConditionItemWrapper>
              <ConditionItemWrapper>
                <ConditionItem>{rentalConditions.split('\n')[2]}</ConditionItem>
                <ConditionItem>
                  Mileage: <AccentItem>{formatMileage(mileage)}</AccentItem>
                </ConditionItem>
                <ConditionItem>
                  Price:{' '}
                  <AccentItem>{rentalPrice.replace('$', '') + '$'}</AccentItem>
                </ConditionItem>
              </ConditionItemWrapper>
            </RentalConditionsList>
          </NextCarInfoList>
          <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
        </Modal>
      )}
    </>
  );
};

export default AdvertCar;
