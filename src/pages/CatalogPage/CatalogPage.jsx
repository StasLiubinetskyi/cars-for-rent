import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/selectorsCars';
import { getAllCars } from '../../redux/cars/operationsCars';
import CarList from '../../components/CarList/CarList';
import Loader from '../../components/Loader/Loader';

const CatalogPage = () => {
  const cars = useSelector(selectCars);
  const [page] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars(page));
  }, [dispatch, page]);

  if (!cars.length) {
    return <Loader />;
  }

  return (
    <main>
      <CarList data={cars}></CarList>
    </main>
  );
};

export default CatalogPage;
