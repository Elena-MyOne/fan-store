import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { formateCardExpirationDate } from '../../utils/formateCardExpirationDate';

export interface CheckoutState {
  cardNumber: string;
  holderName: string;
  expirationDate: string;
  cvc: string;
  isCardNumberError: boolean;
  isHolderNameError: boolean;
  isExpirationDateError: boolean;
  isCvcError: boolean;
  cardNumberSuccess: boolean;
  holderNameSuccess: boolean;
  expirationDateSuccess: boolean;
  cvcSuccess: boolean;
  isSubmit: boolean;
}

const initialState: CheckoutState = {
  cardNumber: '',
  holderName: '',
  expirationDate: '',
  cvc: '',
  isCardNumberError: false,
  isHolderNameError: false,
  isExpirationDateError: false,
  isCvcError: false,
  cardNumberSuccess: false,
  holderNameSuccess: false,
  expirationDateSuccess: false,
  cvcSuccess: false,
  isSubmit: false,
};

const CheckoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setCardNumber(state, action: PayloadAction<string>) {
      state.cardNumber = action.payload;
    },

    validateCardNumber: (state) => {
      const maxCardNumberLength = 16;
      const minCardNumberLength = 13;
      const isInputValueNumber = !isNaN(Number(state.cardNumber));

      if (
        state.cardNumber.length >= minCardNumberLength ||
        maxCardNumberLength <= state.cardNumber.length
      ) {
        state.cardNumberSuccess = true;
      } else if (isInputValueNumber) {
        state.isCardNumberError = false;
        state.cardNumberSuccess = false;
      } else {
        state.isCardNumberError = true;
        state.cardNumberSuccess = false;
      }
    },

    setCardHolderName(state, action: PayloadAction<string>) {
      state.holderName = action.payload;
    },

    validateCardHolderName: (state) => {
      if (state.holderName) {
        state.holderNameSuccess = true;
        state.isHolderNameError = false;
      } else {
        state.holderNameSuccess = false;
        state.isHolderNameError = true;
      }
    },

    setExpirationDate(state, action: PayloadAction<string>) {
      state.expirationDate = formateCardExpirationDate(action.payload);

      if (state.expirationDate.length === 5) {
        state.expirationDate = formateCardExpirationDate(action.payload);
        state.expirationDateSuccess = true;
        state.isExpirationDateError = false;
      } else if (state.expirationDate === '') {
        state.expirationDate = '';
        state.expirationDateSuccess = false;
      }
    },

    setCardCvc(state, action: PayloadAction<string>) {
      state.cvc = action.payload;
    },

    validateCardCvc: (state) => {
      if (state.cvc && state.cvc.length === 3 && !isNaN(Number(state.cvc))) {
        state.cvcSuccess = true;
        state.isCvcError = false;
      } else if (isNaN(Number(state.cvc))) {
        state.cvcSuccess = false;
        state.isCvcError = true;
      } else if (state.cvc || state.cvc === '') {
        state.cvcSuccess = false;
        state.isCvcError = false;
      }
    },

    setSuccessFormSubmit(state) {
      state.isSubmit = true;
      state.isCvcError = false;
      state.isCardNumberError = false;
      state.isHolderNameError = false;
      state.isExpirationDateError = false;
    },

    setFormSubmitError(state) {
      state.isSubmit = false;
      state.isCvcError = !state.cvcSuccess;
      state.isCardNumberError = !state.cardNumberSuccess;
      state.isHolderNameError = !state.holderNameSuccess;
      state.isExpirationDateError = !state.expirationDateSuccess;
    },
  },
});

export const selectCheckout = (state: RootState) => state.checkout;

export const {
  setCardNumber,
  validateCardNumber,
  setCardHolderName,
  validateCardHolderName,
  setExpirationDate,
  setCardCvc,
  validateCardCvc,
  setSuccessFormSubmit,
  setFormSubmitError,
} = CheckoutSlice.actions;
export default CheckoutSlice.reducer;
