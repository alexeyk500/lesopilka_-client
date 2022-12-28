import { DeliveryMethodEnum, PaymentMethodEnum } from '../types/types';
import { addDays } from '../utils/functions';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type NewOrderSliceType = {
  date: string;
  deliveryMethod: DeliveryMethodEnum;
  deliveryLocationId: number | undefined;
  deliveryAddress: string | undefined;
  contactPersonName: string | undefined;
  contactPersonPhone: string | undefined;
  paymentMethod: PaymentMethodEnum;
};

const initialState: NewOrderSliceType = {
  date: addDays(new Date(), 1),
  deliveryMethod: DeliveryMethodEnum.pickup,
  deliveryLocationId: undefined,
  deliveryAddress: undefined,
  contactPersonName: undefined,
  contactPersonPhone: undefined,
  paymentMethod: PaymentMethodEnum.transferToAccount,
};

export const newOrderSlice = createSlice({
  name: 'newOrderSlice',
  initialState,
  reducers: {
    setDate: (state, actions) => {
      state.date = actions.payload;
    },
    setDeliveryMethod: (state, actions) => {
      state.deliveryMethod = actions.payload;
    },
    setPaymentMethod: (state, actions) => {
      state.paymentMethod = actions.payload;
    },
  },
});

export const { setDate, setDeliveryMethod, setPaymentMethod } = newOrderSlice.actions;

export const selectorNewOrderDate = (state: RootState) => state.newOrder.date;
export const selectorNewOrderDeliveryMethod = (state: RootState) => state.newOrder.deliveryMethod;
export const selectorNewOrderPaymentMethod = (state: RootState) => state.newOrder.paymentMethod;

export default newOrderSlice.reducer;
