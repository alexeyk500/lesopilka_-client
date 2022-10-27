import React from 'react';
import classes from './ProductDetails.module.css';
import { useAppSelector } from '../../../../hooks/hooks';
import { selectorCatalogIsLoading } from '../../../../store/catalogSlice';
import Preloader from '../../../../components/Preloader/Preloader';
import ProductCatalogSection from './ProductCatalogSection/ProductCatalogSection';
import ProductSizesSection from './ProductSizesSection/ProductSizesSection';
import ProductCodeSection from './ProductCodeSection/ProductCodeSection';
import ProductImagesSection from './ProductImagesSection/ProductImagesSection';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductPriceSection from './ProductPriceSection/ProductPriceSection';
import ProductSortAndSepticSection from './ProductSortAndSepticSection/ProductSortAndSepticSection';

const ProductDetails: React.FC = () => {
  const isLoading = useAppSelector(selectorCatalogIsLoading);

  return (
    <div className={classes.container}>
      {isLoading ? (
        <div className={classes.preloaderContainer}>
          <Preloader />
        </div>
      ) : (
        <div className={classes.scrollContainer}>
          <ProductCatalogSection />
          <ProductSizesSection />
          <ProductSortAndSepticSection />
          <ProductImagesSection />
          <ProductDescription />
          <ProductCodeSection />
          <ProductPriceSection />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
