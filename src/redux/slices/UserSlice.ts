import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  isSignUp: boolean;
  name: string;
  nameSuccess: boolean;
  isNameError: boolean;
  email: string;
  emailSuccess: boolean;
  isEmailError: boolean;
  password: string;
  passwordSuccess: boolean;
  isPasswordError: boolean;
  confirmPassword: string;
  confirmPasswordSuccess: boolean;
  isConfirmPasswordError: boolean;
  isRegisterError: boolean;
  registerErrorMessage: string;
}

const initialState: UserState = {
  isSignUp: false,
  name: '',
  nameSuccess: false,
  isNameError: false,
  email: '',
  emailSuccess: false,
  isEmailError: false,
  password: '',
  passwordSuccess: false,
  isPasswordError: false,
  confirmPassword: '',
  confirmPasswordSuccess: false,
  isConfirmPasswordError: false,
  isRegisterError: false,
  registerErrorMessage: '',
};

const USER_REGEX = /^[a-zA-Z0-9-_]{2,30}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,30}$/;

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSignUp(state, action: PayloadAction<boolean>) {
      state.isSignUp = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setConfirmPassword(state, action: PayloadAction<string>) {
      state.confirmPassword = action.payload;
    },
    validateUserName(state) {
      const result = USER_REGEX.test(state.name);
      if (result) {
        state.nameSuccess = true;
        state.isNameError = false;
      } else {
        state.nameSuccess = false;
      }
    },
    validateUserEmail(state) {
      const result = EMAIL_REGEX.test(state.email);
      if (result) {
        state.emailSuccess = true;
        state.isEmailError = false;
      } else {
        state.emailSuccess = false;
      }
    },
    validatePassword(state) {
      const result = PASSWORD_REGEX.test(state.password);
      if (result) {
        state.passwordSuccess = true;
        state.isPasswordError = false;
      } else {
        state.passwordSuccess = false;
      }
    },
    validateConfirmPassword(state) {
      const result = state.password === state.confirmPassword;
      if (result) {
        state.confirmPasswordSuccess = true;
        state.isConfirmPasswordError = false;
      } else {
        state.confirmPasswordSuccess = false;
      }
    },
    validateForm(state) {
      state.nameSuccess ? (state.isNameError = false) : (state.isNameError = true);
      state.emailSuccess ? (state.isEmailError = false) : (state.isEmailError = true);
      state.passwordSuccess ? (state.isPasswordError = false) : (state.isPasswordError = true);
      state.confirmPasswordSuccess
        ? (state.isConfirmPasswordError = false)
        : (state.isConfirmPasswordError = true);
      state.isSignUp = false;
    },
    setIsRegisterError(state, action: PayloadAction<boolean>) {
      state.isRegisterError = action.payload;
    },
    setRegisterErrorMessage(state, action: PayloadAction<string>) {
      state.registerErrorMessage = action.payload;
    },
    clearSignUpFormInputs(state) {
      state.name = '';
      state.nameSuccess = false;
      state.email = '';
      state.emailSuccess = false;
      state.password = '';
      state.passwordSuccess = false;
      state.confirmPassword = '';
      state.confirmPasswordSuccess = false;
    },
  },
});

export const {
  setSignUp,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  validateUserName,
  validateUserEmail,
  validatePassword,
  validateConfirmPassword,
  validateForm,
  setIsRegisterError,
  setRegisterErrorMessage,
  clearSignUpFormInputs,
} = UserSlice.actions;
export default UserSlice.reducer;
