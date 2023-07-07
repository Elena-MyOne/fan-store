import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, selectUser } from '../../../../../redux/store';
import Loader from '../../../../Loader/Loader';
import {
  clearChangePasswordInputs,
  setConfirmPassword,
  setPassword,
  validateChangePasswordForm,
  validateConfirmPassword,
  validatePassword,
} from '../../../../../redux/slices/UserSlice';
import { changePassword } from '../../../../../redux/asyncActions';
import SuccessPopup from '../../../../SuccessPopup/SuccessPopup';

const NewPasswordForm: React.FC = () => {
  const [isRequestSend, setIsRequestSend] = React.useState(false);
  const [isRequestSuccess, setIsRequestSuccess] = React.useState(false);

  const {
    password,
    isPasswordError,
    passwordSuccess,
    confirmPassword,
    confirmPasswordSuccess,
    isConfirmPasswordError,
  } = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  }, []);

  function handleNewPassword(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setPassword(e.target.value));
    dispatch(validatePassword());
  }

  function handleConfirmNewPassword(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setConfirmPassword(e.target.value));
    dispatch(validateConfirmPassword());
  }

  const handelForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(validateChangePasswordForm());
    if (passwordSuccess && confirmPasswordSuccess) {
      try {
        setIsRequestSend(true);
        await dispatch(changePassword());
        setIsRequestSuccess(true);
        setTimeout(() => {
          dispatch(clearChangePasswordInputs());
          setIsRequestSuccess(false);
        }, 10000);
      } finally {
        setIsRequestSend(false);
      }
    }
  };

  const inputStyles =
    'border rounded px-2 py-1 w-full outline-none focus:border-orange-300 duration-300 hover:border-orange-400 mt-1';
  const errorInputStyles =
    'border rounded px-2 py-1 w-full outline-none border-red-600 duration-300 hover:border-orange-400';
  const successInputValueStyle = 'success text-green-600 mt-1';
  const errorStyle = 'error text-red-600 mt-1';
  const errorStyleHidden = 'hidden';

  return (
    <>
      {isRequestSuccess ? (
        <SuccessPopup />
      ) : (
        <>
          {isRequestSend ? (
            <Loader text="Changing password ..." />
          ) : (
            <form className="flex items-center justify-center flex-col gap-6" onSubmit={handelForm}>
              <div className="w-full">
                <label htmlFor="new">New Password</label>
                <input
                  type="password"
                  className={`new-password ${isPasswordError ? errorInputStyles : inputStyles}`}
                  value={password}
                  onChange={handleNewPassword}
                  id="new"
                  autoComplete="off"
                  aria-describedby="new"
                  ref={passwordRef}
                />
                <div
                  className={isPasswordError ? errorStyle : errorStyleHidden}
                  aria-live="assertive"
                >
                  New password must include one lowercase, uppercase, number, and special character.
                  The length should be between 8 and 30 symbols.
                </div>
                <div
                  className={passwordSuccess ? successInputValueStyle : errorStyleHidden}
                  aria-live="assertive"
                >
                  &#10003; Correct
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="confirmNew">Confirm New Password</label>
                <input
                  type="password"
                  className={`confirm-new ${
                    isConfirmPasswordError ? errorInputStyles : inputStyles
                  }`}
                  value={confirmPassword}
                  onChange={handleConfirmNewPassword}
                  id="confirmNew"
                  autoComplete="off"
                  aria-describedby="confirmNew"
                />
                <div
                  className={isConfirmPasswordError ? errorStyle : errorStyleHidden}
                  aria-live="assertive"
                >
                  It does not match the new password
                </div>
                <div
                  className={confirmPasswordSuccess ? successInputValueStyle : errorStyleHidden}
                  aria-live="assertive"
                >
                  &#10003; Correct
                </div>
              </div>
              <button
                type="submit"
                className="px-10 py-2 block text-white bg-orange-500 hover:bg-orange-600 duration-300 rounded-3xl cursor-pointer"
              >
                Save
              </button>
            </form>
          )}
        </>
      )}
    </>
  );
};

export default NewPasswordForm;
