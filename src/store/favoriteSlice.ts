import { ProductType } from '../types/types';
import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { serverApi } from '../api/serverApi';
import { showErrorPopUp } from '../components/InfoAndErrorMessageForm/InfoAndErrorMessageForm';
import { RootState } from './store';
import { UniversalServerResponseType } from '../api/serverResponseTypes';

type FavoriteSliceType = {
  products: ProductType[];
  isLoading: boolean;
};

const initialState: FavoriteSliceType = {
  products: [],
  isLoading: false,
};

export const getFavoriteProductsThunk = createAsyncThunk<ProductType[], string, { rejectValue: string }>(
  'favoriteSlice/getFavoriteProductsThunk',
  async (token, { rejectWithValue }) => {
    try {
      return await serverApi.getFavoriteProducts(token);
    } catch (e: any) {
      return rejectWithValue('Ошибка получения списка избранных товаров\n' + e.response?.data?.message);
    }
  }
);

export const createFavoriteProductThunk = createAsyncThunk<
  UniversalServerResponseType,
  { productId: number; token: string },
  { rejectValue: string }
>('favoriteSlice/createFavoriteProductThunk', async ({ productId, token }, { rejectWithValue }) => {
  try {
    return await serverApi.createFavoriteProduct(productId, token);
  } catch (e: any) {
    return rejectWithValue('Ошибка отправки товара в Избранное\n' + e.response?.data?.message);
  }
});

export const deleteFavoriteProductThunk = createAsyncThunk<
  UniversalServerResponseType,
  { productId: number; token: string },
  { rejectValue: string }
>('favoriteSlice/deleteFavoriteProductThunk', async ({ productId, token }, { rejectWithValue }) => {
  try {
    return await serverApi.deleteFavoriteProduct(productId, token);
  } catch (e: any) {
    return rejectWithValue('Ошибка удаления товара из Избранного\n' + e.response?.data?.message);
  }
});

export const favoriteSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteProductsThunk.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(createFavoriteProductThunk.fulfilled, deleteFavoriteProductThunk.fulfilled), (state) => {
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          getFavoriteProductsThunk.pending,
          createFavoriteProductThunk.pending,
          deleteFavoriteProductThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getFavoriteProductsThunk.rejected,
          createFavoriteProductThunk.rejected,
          deleteFavoriteProductThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          showErrorPopUp(action.payload!);
        }
      );
  },
});

export const selectorFavoriteProducts = (state: RootState) => state.favorite.products;

export default favoriteSlice.reducer;
