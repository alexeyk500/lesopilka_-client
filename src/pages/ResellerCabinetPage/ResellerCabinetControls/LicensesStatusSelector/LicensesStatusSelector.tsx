import React from 'react';
import CheckBoxSection from '../../../../components/commonComponents/CheckBoxSection/CheckBoxSection';
import CheckBoxSquare from '../../../../components/commonComponents/CheckBoxSquare/CheckBoxSquare';
import { ResellerManufacturerStatusEnum, OptionsType } from '../../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { selectorResellerLicensesStatusOptionsId, setLicensesStatusOptionsId } from '../../../../store/resellerSlice';

const licensesStatusOptions: OptionsType[] = [
  { id: 0, title: 'Все', toolTip: 'Общий список' },
  { id: 1, title: ResellerManufacturerStatusEnum.normal, toolTip: 'Лицензий достаточно' },
  { id: 2, title: ResellerManufacturerStatusEnum.attention, toolTip: 'Лицензии на исходе' },
  { id: 3, title: ResellerManufacturerStatusEnum.noPublication, toolTip: 'Лицензии закончились' },
  { id: 4, title: ResellerManufacturerStatusEnum.blocked, toolTip: 'Публикация заблокирована' },
];

const LicensesStatusSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const licensesStatusOptionsId = useAppSelector(selectorResellerLicensesStatusOptionsId);

  const onSelect = (id: number) => {
    dispatch(setLicensesStatusOptionsId(id));
  };

  return (
    <CheckBoxSection title={'Статус поставщика'}>
      {licensesStatusOptions.map((option) => (
        <CheckBoxSquare
          key={option.id!}
          id={option.id!}
          title={option.title}
          checked={licensesStatusOptionsId === option.id}
          toolTip={option.toolTip}
          toolTipVerticalShift={245}
          onSelect={onSelect}
        />
      ))}
    </CheckBoxSection>
  );
};

export default LicensesStatusSelector;
