import React from 'react';
import SectionContainer from '../../../EditCardPage/EditCardMainPart/ProductDetails/SectionContainer/SectionContainer';
import CheckBoxBlueSquare from '../../../../components/commonComponents/CheckBoxBlueSquare/CheckBoxBlueSquare';
import classes from './DeliverySection.module.css';
import SearchLocationSelector from '../../../../components/commonComponents/SearchLocationSelector/SearchLocationSelector';

const DeliverySection: React.FC = () => {
  return (
    <SectionContainer title={'Способ доставки'} completeCondition={false}>
      <div className={classes.checkBoxContainer}>
        <CheckBoxBlueSquare id={1} title={'Самовывоз'} checked={true} onSelect={() => {}} />
        <div className={classes.pickUpAddressContainer}>
          <div className={classes.pickUpAddressTitle}>{'г. Самара, ул. Ленина, д.45'}</div>
        </div>
      </div>
      <div className={classes.checkBoxDeliveryContainer}>
        <CheckBoxBlueSquare
          id={2}
          title={'Доставка по адресу'}
          checked={false}
          onSelect={() => {}}
          additionalInfo={
            'За организацию доставки поставщик может брать дополнительную плату, если доставка платная, то ее стоимость поставщик укажет в счете на заказ.'
          }
        />
        <div className={classes.rowContainer}>
          <div className={classes.locationSelectorContainer}>
            <SearchLocationSelector />
          </div>
          <div className={classes.contentContainer}>
            <div className={classes.title}>{'Укажите Ваш точный адрес для доставки'}</div>
            <input className={classes.customSizeInput} placeholder={'Улица, дом'} onChange={() => {}} type="text" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default DeliverySection;
