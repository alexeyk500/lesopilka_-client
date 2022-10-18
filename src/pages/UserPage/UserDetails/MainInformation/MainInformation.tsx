import React from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import classes from './MainInformation.module.css';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { selectorUser, userUpdateNameOrPasswordThunk } from '../../../../store/userSlice';
import ButtonComponent, { ButtonType } from '../../../../components/commonComponents/ButtonComponent/ButtonComponent';
import { showPortalPopUp } from '../../../../components/PortalPopUp/PortalPopUp';
import ChangeUserNameForm from './ChangeUserNameForm/ChangeUserNameForm';

const MainInformation: React.FC = () => {
  const user = useAppSelector(selectorUser);
  const dispatch = useAppDispatch();

  const onClosePopUp = (response: boolean | FormData | undefined) => {
    if (response instanceof FormData) {
      const name = response.get('name')!.toString();
      const token = localStorage.getItem(process.env.REACT_APP_APP_ACCESS_TOKEN!);
      if (token && name) {
        dispatch(userUpdateNameOrPasswordThunk({ token, name }));
      }
    }
  };

  const onClick = () => {
    if (user && user.name) {
      showPortalPopUp({
        popUpContent: <ChangeUserNameForm name={user.name} />,
        onClosePopUp: onClosePopUp,
        titleConfirmBtn: 'Сохранить',
      });
    }
  };

  return (
    <SectionContainer title={'Учетная информация'}>
      <div className={classes.content}>
        <div className={classes.rowContainer}>
          <div className={classes.dataContainer}>
            <div className={classes.rowDataContainer}>
              <div className={classes.title}>{'Эл.почта пользователя :'}</div>
              <div className={classes.value}>{user?.email}</div>
            </div>
            <div className={classes.rowDataContainer}>
              <div className={classes.title}>{'Имя пользователя :'}</div>
              <div className={classes.value}>{user?.name}</div>
              <div className={classes.btnContainer}>
                <ButtonComponent
                  title={'Редактировать'}
                  buttonType={ButtonType.SECONDARY}
                  style={{ width: 180 }}
                  onClick={onClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default MainInformation;
