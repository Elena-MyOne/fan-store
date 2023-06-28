import React from 'react';
import { ROUTER_PATH } from '../../../../models/enums';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { reset } from '../../../../redux/slices/UserSlice';
import Loader from '../../../Loader/Loader';

const Logout: React.FC = () => {
  const [isRequestSend, setIsRequestSend] = React.useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const handelLogOut = async () => {
    try {
      setIsRequestSend(true);
      localStorage.removeItem('useInfo');
      dispatch(reset());
    } finally {
      setIsRequestSend(true);
      navigate(ROUTER_PATH.HOME);
    }
  };

  const buttonStyles =
    'w-40 px-6 py-2 block hover:text-white bg-gray-200 hover:bg-gray-900 duration-300 rounded-3xl';

  return (
    <>
      {isRequestSend ? (
        <Loader text="Logging out ..." />
      ) : (
        <div className="logout flex justify-center">
          <div className="body border rounded px-4 py-8 md:w-[450px] w-[310px] flex flex-col justify-center items-center gap-6">
            <p>Are you sure, you want to logout?</p>
            <div className="buttons text-center flex items-center gap-4">
              <Link to={`/${ROUTER_PATH.PROFILE}/${ROUTER_PATH.ACCOUNT}`} className={buttonStyles}>
                Cancel
              </Link>
              <button onClick={handelLogOut} className={buttonStyles}>
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Logout;
