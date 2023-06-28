import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, selectUser } from '../../redux/store';
import {
  clearLogInFormInputs,
  setIsRegisterError,
  setRegisterErrorMessage,
  setUserLogInError,
} from '../../redux/slices/UserSlice';

const FormErrorPopup = () => {
  const { isRegisterError, registerErrorMessage, isUserLogInError } = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  function handleErrorMessagePopup() {
    if (isRegisterError) {
      dispatch(setIsRegisterError(false));
    }
    if (isUserLogInError) {
      dispatch(setUserLogInError(false));
      dispatch(clearLogInFormInputs());
    }

    dispatch(setRegisterErrorMessage(''));
  }

  function showErrorMessage(): string {
    if (registerErrorMessage) {
      return registerErrorMessage;
    } else if (isUserLogInError) {
      return 'Invalid Name or Password. Please check the entered user name or email, and password and try again.';
    } else {
      return 'Error Occurred';
    }
  }

  return (
    <div className="error w-full bg-red-400 py-2 px-2 text-center relative">
      <button className="absolute top-5 right-3" onClick={handleErrorMessagePopup}>
        <svg className="w-[22px] h-[22px]" viewBox="0 96 960 960">
          <path
            className="fill-current"
            d="m250.923 837.076-31.999-31.999L448.001 576 218.924 346.923l31.999-31.999L480 544.001l229.077-229.077 31.999 31.999L511.999 576l229.077 229.077-31.999 31.999L480 607.999 250.923 837.076Z"
          />
        </svg>
      </button>

      <h2 className="title text-center font-semibold max-w-[420px] m-auto">
        {(registerErrorMessage || isUserLogInError) && showErrorMessage()}
        {/* {registerErrorMessage ? registerErrorMessage : 'Error Occurred'} */}
      </h2>
      {registerErrorMessage && <p>Please try again later</p>}
    </div>
  );
};

export default FormErrorPopup;
