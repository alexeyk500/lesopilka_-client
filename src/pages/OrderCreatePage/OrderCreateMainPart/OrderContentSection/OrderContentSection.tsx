import React, { useEffect } from 'react';
import classes from './OrderContentSection.module.css';
import OrderToManufacturer from '../../../BasketPage/BasketPageMainPart/BasketList/OrderToManufacturer/OrderToManufacturer';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { selectorUser } from '../../../../store/userSlice';
import { getBasketProductsThunk, selectorBasketProducts } from '../../../../store/basketSlice';
import { filterProductsByManufacturerId } from '../../../../utils/productFunctions';

const OrderContentSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectorUser);
  const basketProducts = useAppSelector(selectorBasketProducts);

  useEffect(() => {
    const token = localStorage.getItem(process.env.REACT_APP_APP_ACCESS_TOKEN!);
    if (user && token) {
      dispatch(getBasketProductsThunk(token));
    }
  }, [dispatch, user]);

  const productsByManufacturerId = filterProductsByManufacturerId(basketProducts, 9);
  console.log({ productsByManufacturerId });

  return (
    <div className={classes.container}>
      <div className={classes.sectionTitle}>{`Заказ поставщику`}</div>
      {productsByManufacturerId.length > 0 && <OrderToManufacturer products={productsByManufacturerId} hideButtons />}
    </div>
  );
};

export default OrderContentSection;
