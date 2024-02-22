import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/selectorsCars';
import { useEffect, useState } from 'react';
import { getAllCars } from '../../redux/cars/operationsCars';
import CarList from '../../components/CarList/CarList';
import { CatalogPage } from './CatalogPage.styled';

const Catalog = () => {
  const cars = useSelector(selectCars);
  const [page] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars(page));
  }, [dispatch, page]);

  return (
    <main>
      <CatalogPage>
        <CarList data={cars}></CarList>
      </CatalogPage>
    </main>
  );
};

export default Catalog;