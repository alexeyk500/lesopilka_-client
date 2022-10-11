import React from 'react';
import classes from './LeftColumnContent.module.css';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { useAppSelector } from '../../../hooks/hooks';
import { selectorNewCard } from '../../../store/newCardSlice';
import { ManufacturerType, ProductCardDataType } from '../../../types/types';
import { selectorCategorySizes, selectorSubCategories } from '../../../store/catalogSlice';

const MANUFACTURER: ManufacturerType = {
  title: 'ООО Лесопилка',
  location: 'г.Самара',
};

const getPrice = (price: string) => {

  const splitPrice = String((Math.round(Number(price) * 100) / 100).toFixed(2)).split('.');
  return `${splitPrice[0]},${splitPrice[1]}`
}

const LeftColumnContent: React.FC = () => {
  const newCard = useAppSelector(selectorNewCard);
  const subCategoriesStore = useAppSelector(selectorSubCategories);
  const allCategorySizes = useAppSelector(selectorCategorySizes);

  const subCategory = subCategoriesStore.find((subCategory) => subCategory.id === newCard.subCategoryId);

  let width: string | undefined;
  if (newCard.customWidth) {
    width = newCard.customWidth;
  } else {
    width = allCategorySizes.find((categorySize) => categorySize.id === newCard.widthId)?.value || undefined;
  }


  let height: string | undefined;
  if (newCard.customHeight) {
    height = newCard.customHeight;
  } else {
    height = allCategorySizes.find((categorySize) => categorySize.id === newCard.heightId)?.value || undefined;
  }

  let caliber: string | undefined ;
  if (newCard.customCaliber) {
    caliber = newCard.customCaliber;
  } else {
    caliber =
      allCategorySizes.find((categorySize) => categorySize.id === newCard.caliberId)?.value || undefined;
  }

  let length;
  if (newCard.customLength) {
    length = newCard.customLength;
  } else {
    length = allCategorySizes.find((categorySize) => categorySize.id === newCard.lengthId)?.value || '';
  }



  const productCardData: ProductCardDataType = {
    manufacturer: MANUFACTURER,
    subCategoryTile: subCategory ? subCategory.title : '',
    image: newCard.images.length > 0 ? newCard.images[0] : undefined,
    width,
    height,
    caliber,
    length,
    price: newCard.price ? getPrice(newCard.price) : '',
  };

  return (
    <>
      <div className={classes.title}>Карточка Товара</div>
      <div className={classes.cardContainer}>
        <ProductCard productCardData={productCardData} />
      </div>
    </>
  );
};

export default LeftColumnContent;
