import React from 'react';
import classes from './FiltersRow.module.css';
import FilterSearch from './FilterSearch/FilterSearch';
import FilterCategory from './FilterCategory/FilterCategory';
import FilterSubCategory from './FilterSubCategory/FilterSubCategory';
import FilterSize from './FilterSize/FilterSize';
import { QueryEnum } from '../../../types/types';
import FilterOption from './FilterOption/FilterOption';
import { useAppSelector } from '../../../hooks/hooks';
import { selectorProductSorts } from '../../../store/catalogSlice';
import { SEPTIC_OPTIONS } from '../../../utils/constants';

const FiltersRow: React.FC = () => {
  const sortsOptions = useAppSelector(selectorProductSorts);

  return (
    <div className={classes.container}>
      <FilterSearch />
      <FilterCategory />
      <FilterSubCategory />
      <FilterSize queryEnumSize={QueryEnum.HeightSizeId} />
      <FilterSize queryEnumSize={QueryEnum.WeightSizeId} />
      <FilterSize queryEnumSize={QueryEnum.CaliberSizeId} />
      <FilterSize queryEnumSize={QueryEnum.LengthSizeId} />
      <FilterOption options={sortsOptions} queryEnum={QueryEnum.SortId} />
      <FilterOption options={SEPTIC_OPTIONS} queryEnum={QueryEnum.Septic} />
    </div>
  );
};

export default FiltersRow;
