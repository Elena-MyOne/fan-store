import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, selectUser } from '../../../../../redux/store';
import { validateCurrentPassword } from '../../../../../redux/asyncActions';
import { setCurrentPassword } from '../../../../../redux/slices/UserSlice';
import Loader from '../../../../Loader/Loader';

const ConfirmCurrentPasswordForm: React.FC = () => {
  const [isRequestSend, setIsRequestSend] = React.useState(false);

  const { currentPassword, currentPasswordSuccess, isCurrentPasswordError } =
    useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  const currentPasswordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (currentPasswordRef.current) {
      currentPasswordRef.current.focus();
    }
  }, []);

  const handelForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsRequestSend(true);
    if (currentPassword) {
      await dispatch(validateCurrentPassword());
    }
    setIsRequestSend(false);
  };

  function handleCurrentPassword(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setCurrentPassword(e.target.value));
  }

  const inputStyles =
    'border rounded px-2 py-1 w-full outline-none focus:border-orange-300 duration-300 hover:border-orange-400 mt-1';
  const errorInputStyles =
    'border rounded px-2 py-1 w-full outline-none border-red-600 duration-300 hover:border-orange-400';
  const successInputValueStyle = 'success text-green-600 mt-1';
  const errorStyle = 'error text-red-600 mt-1';
  const errorStyleHidden = 'hidden';

  return (
    <>
      {isRequestSend ? (
        <Loader text="Confirm password ..." />
      ) : (
        <form className="flex items-center justify-center flex-col gap-6" onSubmit={handelForm}>
          <div className="w-full">
            <label htmlFor="current">Current Password</label>
            <input
              type="password"
              className={`current-password ${
                isCurrentPasswordError ? errorInputStyles : inputStyles
              }`}
              value={currentPassword}
              onChange={handleCurrentPassword}
              ref={currentPasswordRef}
              id="current"
              autoComplete="off"
              aria-describedby="current"
            />
            <div
              className={isCurrentPasswordError ? errorStyle : errorStyleHidden}
              aria-live="assertive"
            >
              The field value does not match with current password
            </div>
            <div
              className={currentPasswordSuccess ? successInputValueStyle : errorStyleHidden}
              aria-live="assertive"
            >
              &#10003; Correct
            </div>
          </div>
          <button
            type="submit"
            className="px-10 py-2 block text-white bg-orange-500 hover:bg-orange-600 duration-300 rounded-3xl cursor-pointer"
          >
            Confirm
          </button>
        </form>
      )}
    </>
  );
};

export default ConfirmCurrentPasswordForm;
