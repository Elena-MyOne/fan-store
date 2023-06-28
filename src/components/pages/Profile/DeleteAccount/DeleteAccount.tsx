import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '../../../../models/enums';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { deleteUser } from '../../../../redux/asyncActions';

const DeleteAccount: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const buttonStyles =
    'w-40 px-6 py-2 block hover:text-white bg-gray-200 hover:bg-gray-900 duration-300 rounded-3xl';

  function handelDeleteUser() {
    dispatch(deleteUser());
    navigate(ROUTER_PATH.HOME);
  }

  return (
    <div className="delete-account flex justify-center">
      <div className="body border rounded px-4 py-8 md:w-[450px] w-[310px] flex flex-col justify-center items-center gap-6">
        <p>Are you sure, you want to delete account?</p>
        <div className="buttons text-center flex items-center gap-4">
          <Link to={`/${ROUTER_PATH.PROFILE}/${ROUTER_PATH.ACCOUNT}`} className={buttonStyles}>
            Cancel
          </Link>
          <button onClick={handelDeleteUser} className={buttonStyles}>
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
