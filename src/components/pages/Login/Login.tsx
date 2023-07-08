import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/store';
import LoginForm from './LoginForm/LoginForm';
import FormErrorPopup from '../../FormErrorPopup/FormErrorPopup';
import SuccessPopup from '../../SuccessPopup/SuccessPopup';

const Login = () => {
  const { isSignUp, isUserLogInError } = useSelector(selectUser);

  return (
    <>
      {isUserLogInError && <FormErrorPopup />}
      <section className="login h-[87vh] flex justify-center items-center bg-gray-100">
        <div className="body bg-white p-4 border rounded md:w-[450px] w-[310px]">
          {isSignUp ? <SuccessPopup /> : <LoginForm />}
        </div>
      </section>
    </>
  );
};

export default Login;
