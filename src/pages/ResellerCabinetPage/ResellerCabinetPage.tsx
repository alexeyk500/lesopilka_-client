import React from 'react';
import classes from './ResellerCabinetPage.module.css';
import LeftColumn from '../../components/LeftColumn/LeftColumn';
import MainColumn from '../../components/MainColumn/MainColumn';
import ResellerCabinetControls from './ResellerCabinetControls/ResellerCabinetControls';
import ResellerCabinetMain from './ResellerCabinetMain/ResellerCabinetMain';

const ResellerCabinetPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <LeftColumn title={`Кабинет реселлера`}>
        <ResellerCabinetControls />
      </LeftColumn>
      <MainColumn noScroll>
        <ResellerCabinetMain />
      </MainColumn>
    </div>
  );
};

export default ResellerCabinetPage;
