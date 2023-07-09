import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getUserFromLocalStorage } from '../../utils/getUserFromLoocalStorage';

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
  id: number;
  userLogInInfo: string;
  isUserLogInError: boolean;
  isUserLogInSuccess: boolean;
  currentPassword: string;
  currentPasswordSuccess: boolean;
  isCurrentPasswordError: boolean;
  changePasswordErrorMessage: string;
}

const { isSignUp, name, email, id } = getUserFromLocalStorage();

const initialState: UserState = {
  isSignUp,
  name,
  nameSuccess: false,
  isNameError: false,
  email,
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
  id,
  userLogInInfo: '',
  isUserLogInError: false,
  isUserLogInSuccess: false,
  currentPassword: '',
  currentPasswordSuccess: false,
  isCurrentPasswordError: false,
  changePasswordErrorMessage: '',
};

const USER_REGEX = /^[a-zA-Z0-9\s-_]{2,30}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,30}$/;

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: () => initialState,
    setSignUp(state, action: PayloadAction<boolean>) {
      state.isSignUp = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setNameSuccess(state, action: PayloadAction<boolean>) {
      state.nameSuccess = action.payload;
    },
    setIsNameError(state, action: PayloadAction<boolean>) {
      state.isNameError = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setIsEmailError(state, action: PayloadAction<boolean>) {
      state.isEmailError = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setIsPasswordError(state, action: PayloadAction<boolean>) {
      state.isPasswordError = action.payload;
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
    clearUserNameDate(state) {
      state.name = '';
      state.nameSuccess = false;
      state.isNameError = false;
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
    clearUserEmailDate(state) {
      state.email = '';
      state.emailSuccess = false;
      state.isEmailError = false;
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
    validateSignUpForm(state) {
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
    setUserId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    setUserLogInInfo(state, action: PayloadAction<string>) {
      state.userLogInInfo = action.payload;
    },
    setUserLogInError(state, action: PayloadAction<boolean>) {
      state.isUserLogInError = action.payload;
    },
    setUserLogInSuccess(state, action: PayloadAction<boolean>) {
      state.isUserLogInSuccess = action.payload;
    },
    clearLogInFormInputs(state) {
      state.userLogInInfo = '';
      state.password = '';
    },
    setCurrentPassword(state, action: PayloadAction<string>) {
      state.currentPassword = action.payload;
    },
    setCurrentPasswordSuccess(state, action: PayloadAction<boolean>) {
      state.currentPasswordSuccess = action.payload;
    },
    setCurrentPasswordError(state, action: PayloadAction<boolean>) {
      state.isCurrentPasswordError = action.payload;
    },
    setChangeUserDataErrorMessage(state, action: PayloadAction<string>) {
      state.changePasswordErrorMessage = action.payload;
    },
    clearChangePasswordInputs(state) {
      state.currentPassword = '';
      state.currentPasswordSuccess = false;
      state.password = '';
      state.passwordSuccess = false;
      state.confirmPassword = '';
      state.confirmPasswordSuccess = false;
    },
    validateChangePasswordForm(state) {
      state.passwordSuccess ? (state.isPasswordError = false) : (state.isPasswordError = true);
      state.confirmPasswordSuccess
        ? (state.isConfirmPasswordError = false)
        : (state.isConfirmPasswordError = true);
    },
  },
});

export const {
  setSignUp,
  setName,
  setNameSuccess,
  setIsNameError,
  setEmail,
  setIsEmailError,
  setPassword,
  setIsPasswordError,
  setConfirmPassword,
  validateUserName,
  clearUserNameDate,
  validateUserEmail,
  clearUserEmailDate,
  validatePassword,
  validateConfirmPassword,
  validateSignUpForm,
  setIsRegisterError,
  setRegisterErrorMessage,
  clearSignUpFormInputs,
  setUserId,
  setUserLogInInfo,
  setUserLogInError,
  setUserLogInSuccess,
  clearLogInFormInputs,
  reset,
  setCurrentPassword,
  setCurrentPasswordSuccess,
  setCurrentPasswordError,
  setChangeUserDataErrorMessage,
  clearChangePasswordInputs,
  validateChangePasswordForm,
} = UserSlice.actions;
export default UserSlice.reducer;
