import { userApi } from './userApi';
import { catalogApi } from './catalogApi';
import { addressApi } from './addressApi';
import { productApi } from './productApi';
import { priceApi } from './priceApi';
import { basketApi } from './basketApi';

export const serverApi = {
  ...userApi,
  ...catalogApi,
  ...addressApi,
  ...productApi,
  ...priceApi,
  ...basketApi,
};
