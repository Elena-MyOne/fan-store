import React, { ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_PATH } from '../../../models/enums';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/store';
import {
  setConfirmPassword,
  setEmail,
  setName,
  setPassword,
  validateConfirmPassword,
  validateForm,
  validatePassword,
  validateUserEmail,
  validateUserName,
} from '../../../redux/slices/UserSlice';

const SignUp: React.FC = () => {
  const {
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
  } = useSelector(selectUser);
  const dispatch = useDispatch();

  const userRef = React.useRef<HTMLInputElement>(null);

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

  function handelForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(validateForm());
  }

  return (
    <section className="h-[87vh] flex justify-center items-center bg-gray-100">
      <div className="body bg-white p-4 border rounded w-[450px]">
        <h2 className="title text-center font-semibold text-lg mb-8">Register</h2>
        <form className="flex items-center justify-center flex-col gap-8" onSubmit={handelForm}>
          <div className="w-full">
            <input
              type="text"
              className={`name ${isNameError ? errorInputStyles : inputStyles}`}
              placeholder="User Name"
              value={name}
              onChange={handleUserName}
              ref={userRef}
            />
            <div className={isNameError ? errorStyle : errorStyleHidden}>
              The User Name must be from 2 to 30 symbols and can include only letters, numbers and _
            </div>
            <div className={nameSuccess ? successInputValueStyle : errorStyleHidden}>
              &#10003; Correct
            </div>
          </div>
          <div className="w-full">
            <input
              type="text"
              className={`email ${isEmailError ? errorInputStyles : inputStyles}`}
              placeholder="Email"
              value={email}
              onChange={handleUserEmail}
            />
            <div className={isEmailError ? errorStyle : errorStyleHidden}>
              Please enter the email (www@www.com)
            </div>
            <div className={emailSuccess ? successInputValueStyle : errorStyleHidden}>
              &#10003; Correct
            </div>
          </div>
          <div className="w-full">
            <input
              type="password"
              className={`password ${isPasswordError ? errorInputStyles : inputStyles}`}
              placeholder="Password"
              value={password}
              onChange={handleUserPassword}
            />
            <div className={isPasswordError ? errorStyle : errorStyleHidden}>
              The password must include one lowercase, uppercase, number, and special character. The
              length should be between 8 and 30 symbols.
            </div>
            <div className={passwordSuccess ? successInputValueStyle : errorStyleHidden}>
              &#10003; Correct
            </div>
          </div>
          <div className="w-full">
            <input
              type="password"
              className={`password ${isConfirmPasswordError ? errorInputStyles : inputStyles}`}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleUserConfirmPassword}
            />
            <div className={isConfirmPasswordError ? errorStyle : errorStyleHidden}>
              The Password Confirmation should match the Password
            </div>
            <div className={confirmPasswordSuccess ? successInputValueStyle : errorStyleHidden}>
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
            to={ROUTER_PATH.HOME + ROUTER_PATH.LOGIN}
            className="pointer text-orange-500 hover:text-orange-600 duration-300"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
