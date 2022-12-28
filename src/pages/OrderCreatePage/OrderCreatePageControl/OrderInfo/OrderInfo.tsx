import React from 'react';
import classes from './OrderInfo.module.css';
import OrderInfoSection from './OrderInfoSection/OrderInfoSection';

import calendarIcoGray from '../../../../img/calendarIcoGray.svg';
import truckGrayIco from '../../../../img/truckGrayIco.svg';
import phoneGrayIco from '../../../../img/phoneGrayIco.svg';
import wareGrayHouseIco from '../../../../img/wareGrayHouseIco.svg';
import weightGrayIco from '../../../../img/weightGrayIco.svg';
import woodGrayIco from '../../../../img/woodGrayIco.svg';
import cashMachineGrayIco from '../../../../img/cashMachineGrayIco.svg';
import moneyGrayIco from '../../../../img/moneyGrayIco.svg';
import locationGrayIco from '../../../../img/locationGrayIco.svg';

const OrderInfo: React.FC = () => {
  return (
    <div className={classes.container}>
      <OrderInfoSection
        ico={calendarIcoGray}
        title={'Дата доставки:'}
        infoFirstLine={'12 декабря 2022 г.'}
        customIcoClasses={classes.calendarIco}
      />
      <OrderInfoSection
        ico={wareGrayHouseIco}
        title={'Поставщик:'}
        infoFirstLine={'ООО Лесопилка,'}
        infoSecondLine={'г.Самара'}
        customIcoClasses={classes.downIco}
      />
      <OrderInfoSection
        ico={weightGrayIco}
        title={'Вес заказа:'}
        infoFirstLine={'123.0 кг.'}
        customIcoClasses={classes.downIco}
      />
      <OrderInfoSection
        ico={woodGrayIco}
        title={'Объем заказа:'}
        infoFirstLine={'1.3 м.куб.'}
        customIcoClasses={classes.downIco}
      />
      <OrderInfoSection
        ico={truckGrayIco}
        title={'Способ доставки:'}
        infoFirstLine={'Самовывоз'}
        customIcoClasses={classes.calendarIco}
      />
      <OrderInfoSection
        ico={locationGrayIco}
        title={'Адрес доставки:'}
        infoFirstLine={'г.Самара,'}
        infoSecondLine={'ул.Ленина, д.23'}
        customIcoClasses={classes.downIco}
      />
      <OrderInfoSection
        ico={phoneGrayIco}
        title={'Контактное лицо:'}
        infoFirstLine={'Петров Анатолий'}
        infoSecondLine={'+79219843567'}
        customIcoClasses={classes.downIco}
      />
      <OrderInfoSection
        ico={cashMachineGrayIco}
        title={'Способ оплаты:'}
        infoFirstLine={'Наличными'}
        infoSecondLine={'- при самовывозе'}
        customIcoClasses={classes.downIco}
      />
      <OrderInfoSection
        ico={moneyGrayIco}
        title={'Сумма заказа:'}
        infoFirstLine={'1 245.45 руб.'}
        customIcoClasses={classes.downIco}
      />
    </div>
  );
};

export default OrderInfo;
