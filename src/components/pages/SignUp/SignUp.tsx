import React, { ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '../../../models/enums';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, selectUser } from '../../../redux/store';
import {
  clearSignUpFormInputs,
  setConfirmPassword,
  setEmail,
  setIsRegisterError,
  setName,
  setPassword,
  validateConfirmPassword,
  validateSignUpForm,
  validatePassword,
  validateUserEmail,
  validateUserName,
} from '../../../redux/slices/UserSlice';
import { registerNewUser } from '../../../redux/asyncActions';
import FormErrorPopup from '../../FormErrorPopup/FormErrorPopup';
import Loader from '../../Loader/Loader';
import SuccessPopup from '../../SuccessPopup/SuccessPopup';

const SignUp: React.FC = () => {
  const {
    isSignUp,
    name,
    nameSuccess,
    isNameError,
    email,
    emailSuccess,
    isEmailError,
    password,
    passwordSuccess,
    isPasswordError,
    confirmPassword,
    confirmPasswordSuccess,
    isConfirmPasswordError,
    isRegisterError,
  } = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  const userRef = React.useRef<HTMLInputElement>(null);

  const [isRequestSend, setIsRequestSend] = React.useState(false);

  React.useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  const inputStyles =
    'border rounded px-2 py-1 w-full outline-none focus:border-orange-300 duration-300 hover:border-orange-400';
  const errorInputStyles =
    'border rounded px-2 py-1 w-full outline-none border-red-600 duration-300 hover:border-orange-400';
  const errorStyle = 'error text-red-600 mt-1';
  const successInputValueStyle = 'success text-green-600 mt-1';
  const errorStyleHidden = 'hidden';

  function handleUserName(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;
    dispatch(setName(name));
    dispatch(validateUserName());
  }

  function handleUserEmail(e: ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;
    dispatch(setEmail(email));
    dispatch(validateUserEmail());
  }

  function handleUserPassword(e: ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;
    dispatch(setPassword(password));
    dispatch(validatePassword());
  }

  function handleUserConfirmPassword(e: ChangeEvent<HTMLInputElement>) {
    const confirmPassword = e.target.value;
    dispatch(setConfirmPassword(confirmPassword));
    dispatch(validateConfirmPassword());
  }

  const handelForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(validateSignUpForm());
    if (nameSuccess && emailSuccess && passwordSuccess && confirmPasswordSuccess) {
      try {
        setIsRequestSend(true);
        await dispatch(registerNewUser());
      } finally {
        setIsRequestSend(false);
        dispatch(clearSignUpFormInputs());
        setTimeout(() => {
          dispatch(setIsRegisterError(false));
        }, 10000);
      }
    }
  };

  return (
    <>
      {isRegisterError && <FormErrorPopup />}

      <section className="h-[86vh] flex justify-center items-center bg-gray-100">
        <div className="body bg-white p-4 border rounded">
          {isSignUp ? (
            <SuccessPopup />
          ) : (
            <>
              {isRequestSend ? (
                <Loader text="Registration ..." />
              ) : (
                <>
                  <h2 className="title text-center font-semibold text-lg mb-8">Register</h2>
                  <form
                    className="flex items-center justify-center flex-col gap-6 md:w-[450px] w-[310px]"
                    onSubmit={handelForm}
                  >
                    <div className="w-full">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className={`name ${isNameError ? errorInputStyles : inputStyles}`}
                        value={name}
                        onChange={handleUserName}
                        ref={userRef}
                        id="name"
                        autoComplete="off"
                        aria-describedby="name"
                      />
                      <div
                        className={isNameError ? errorStyle : errorStyleHidden}
                        aria-live="assertive"
                      >
                        The User Name must be from 2 to 30 symbols and can include only letters,
                        numbers and _
                      </div>
                      <div
                        className={nameSuccess ? successInputValueStyle : errorStyleHidden}
                        aria-live="assertive"
                      >
                        &#10003; Correct
                      </div>
                    </div>
                    <div className="w-full">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className={`email ${isEmailError ? errorInputStyles : inputStyles}`}
                        value={email}
                        onChange={handleUserEmail}
                        id="email"
                        autoComplete="off"
                        aria-describedby="email"
                      />
                      <div
                        className={isEmailError ? errorStyle : errorStyleHidden}
                        aria-live="assertive"
                      >
                        Please enter the email (www@www.com)
                      </div>
                      <div
                        className={emailSuccess ? successInputValueStyle : errorStyleHidden}
                        aria-live="assertive"
                      >
                        &#10003; Correct
                      </div>
                    </div>
                    <div className="w-full">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className={`password ${isPasswordError ? errorInputStyles : inputStyles}`}
                        onChange={handleUserPassword}
                        value={password}
                        id="password"
                        aria-describedby="password"
                      />
                      <div
                        className={isPasswordError ? errorStyle : errorStyleHidden}
                        aria-live="assertive"
                      >
                        The password must include one lowercase, uppercase, number, and special
                        character. The length should be between 8 and 30 symbols.
                      </div>
                      <div
                        className={passwordSuccess ? successInputValueStyle : errorStyleHidden}
                        aria-live="assertive"
                      >
                        &#10003; Correct
                      </div>
                    </div>
                    <div className="w-full">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        className={`password ${
                          isConfirmPasswordError ? errorInputStyles : inputStyles
                        }`}
                        value={confirmPassword}
                        onChange={handleUserConfirmPassword}
                        id="confirmPassword"
                        aria-describedby="confirmPassword"
                      />
                      <div
                        className={isConfirmPasswordError ? errorStyle : errorStyleHidden}
                        aria-live="assertive"
                      >
                        The Password Confirmation should match the Password
                      </div>
                      <div
                        className={
                          confirmPasswordSuccess ? successInputValueStyle : errorStyleHidden
                        }
                        aria-live="assertive"
                      >
                        &#10003; Correct
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="px-10 py-2 block text-white bg-orange-500 hover:bg-orange-600 duration-300 rounded-3xl cursor-pointer"
                    >
                      Sign Up
                    </button>
                  </form>
                  <div className="registered flex gap-1 justify-center items-center flex-col mt-6">
                    <p>Already registered?</p>
                    <Link
                      to={ROUTER_PATH.MAIN + ROUTER_PATH.LOGIN}
                      className="pointer text-orange-500 hover:text-orange-600 duration-300"
                    >
                      Sign In
                    </Link>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default SignUp;
