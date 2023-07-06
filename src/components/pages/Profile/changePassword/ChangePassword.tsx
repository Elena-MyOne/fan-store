import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/store';
import ConfirmCurrentPasswordForm from './ConfirmCurrentPasswordForm/ConfirmCurrentPasswordForm';
import NewPasswordForm from './NewPasswordForm/NewPasswordForm';

const ChangePassword: React.FC = () => {
  const { currentPasswordSuccess } = useSelector(selectUser);

  return (
    <>
      <div className="change-password flex justify-center">
        <div className="body bg-white p-4 border rounded md:w-[450px] w-[310px]">
          <h2 className="title text-center font-semibold text-lg mb-8">Change Password</h2>
          {currentPasswordSuccess ? <NewPasswordForm /> : <ConfirmCurrentPasswordForm />}
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
