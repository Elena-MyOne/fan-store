import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, selectUser } from '../../../../redux/store';
import { validateLogInUser } from '../../../../redux/asyncActions';
import { setUserLogInInfo, setPassword } from '../../../../redux/slices/UserSlice';
import { ROUTER_PATH } from '../../../../models/enums';
import { Link } from 'react-router-dom';
import Loader from '../../../Loader/Loader';

const LoginForm: React.FC = () => {
  const [isRequestSend, setIsRequestSend] = React.useState(false);

  const { userLogInInfo, isUserLogInError, isUserLogInSuccess, password } = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  const userInfoRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (userInfoRef.current) {
      userInfoRef.current.focus();
    }
  }, []);

  function handleUserInfo(e: ChangeEvent<HTMLInputElement>) {
    const userInfo = e.target.value;
    dispatch(setUserLogInInfo(userInfo));
  }

  function handleUserPassword(e: ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;
    dispatch(setPassword(password));
  }

  const handelForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsRequestSend(true);
      await dispatch(validateLogInUser());
    } finally {
      setIsRequestSend(false);
    }
  };

  const inputStyles =
    'border rounded px-2 py-1 w-full outline-none focus:border-orange-300 duration-300 hover:border-orange-400';
  const errorInputStyles =
    'border rounded px-2 py-1 w-full outline-none border-red-600 duration-300 hover:border-orange-400';
  const successInputValueStyle = 'success text-green-600 mt-1';
  const errorStyleHidden = 'hidden';

  return (
    <>
      {isRequestSend ? (
        <Loader text="Logging in ..." />
      ) : (
        <>
          <h2 className="title text-center font-semibold text-lg mb-8">Log In</h2>
          <form className="flex items-center justify-center flex-col gap-6" onSubmit={handelForm}>
            <div className="w-full">
              <label htmlFor="name">Enter UserName or Email</label>
              <input
                type="text"
                className={`user-info ${isUserLogInError ? errorInputStyles : inputStyles}`}
                value={userLogInInfo}
                onChange={handleUserInfo}
                ref={userInfoRef}
                id="name"
                autoComplete="off"
                aria-describedby="name"
              />
              <div
                className={isUserLogInSuccess ? successInputValueStyle : errorStyleHidden}
                aria-live="assertive"
              >
                &#10003; Correct
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`password ${isUserLogInError ? errorInputStyles : inputStyles}`}
                onChange={handleUserPassword}
                value={password}
                id="password"
                aria-describedby="password"
              />
              <div
                className={isUserLogInSuccess ? successInputValueStyle : errorStyleHidden}
                aria-live="assertive"
              >
                &#10003; Correct
              </div>
            </div>
            <button
              type="submit"
              className="px-10 py-2 block text-white bg-orange-500 hover:bg-orange-600 duration-300 rounded-3xl cursor-pointer"
            >
              Log In
            </button>
            <div className="text-center">
              <p>Do not have an account yet?</p>
              <Link
                to={`/${ROUTER_PATH.SIGNUP}`}
                className="pointer text-orange-500 hover:text-orange-600 duration-300 mt-1"
              >
                Sign up now
              </Link>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default LoginForm;
