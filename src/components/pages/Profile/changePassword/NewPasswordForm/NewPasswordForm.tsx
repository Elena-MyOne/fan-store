import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, selectUser } from '../../../../../redux/store';

const NewPasswordForm: React.FC = () => {
  const [isRequestSend, setIsRequestSend] = React.useState(false);

  const { currentPasswordSuccess, password, confirmPasswordSuccess, isConfirmPasswordError } =
    useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();
  // const currentPasswordRef = React.useRef<HTMLInputElement>(null);

  // React.useEffect(() => {
  //   if (currentPasswordRef.current) {
  //     currentPasswordRef.current.focus();
  //   }
  // }, []);

  // function handleNewPassword(e: ChangeEvent<HTMLInputElement>) {}

  // function validateNewPassword() {}

  // function handleConfirmNewPassword(e: ChangeEvent<HTMLInputElement>) {}

  // console.log(newPassword);

  const inputStyles =
    'border rounded px-2 py-1 w-full outline-none focus:border-orange-300 duration-300 hover:border-orange-400 mt-1';
  const errorInputStyles =
    'border rounded px-2 py-1 w-full outline-none border-red-600 duration-300 hover:border-orange-400';
  const successInputValueStyle = 'success text-green-600 mt-1';
  const errorStyle = 'error text-red-600 mt-1';
  const errorStyleHidden = 'hidden';

  return (
    <form>
      <div>New Form</div>
      {/* <div className="w-full">
                <label htmlFor="new">New Password</label>
                <input
                  type="password"
                  // className={`new-password ${
                  //   newPassword.newPasswordError ? errorInputStyles : inputStyles
                  // }`}
                  // value={newPassword.newPassword}
                  onChange={handleNewPassword}
                  id="new"
                  autoComplete="off"
                  aria-describedby="new"
                />
                <div
                  // className={newPassword.newPasswordError ? errorStyle : errorStyleHidden}
                  aria-live="assertive"
                >
                  New password must include one lowercase, uppercase, number, and special character.
                  The length should be between 8 and 30 symbols.
                </div>
                <div
                  // className={
                  //   newPassword.newPasswordSuccess ? successInputValueStyle : errorStyleHidden
                  // }
                  aria-live="assertive"
                >
                  &#10003; Correct
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="confirmNew">Confirm New Password</label>
                <input
                  type="password"
                  // className={`confirm-new ${
                  //   newPassword.newPasswordError ? errorInputStyles : inputStyles
                  // }`}
                  // value={newPassword.confirmNewPassword}
                  onChange={handleConfirmNewPassword}
                  id="confirmNew"
                  autoComplete="off"
                  aria-describedby="confirmNew"
                />
                <div
                  // className={
                  //   newPassword.currentPasswordSuccess ? successInputValueStyle : errorStyleHidden
                  // }
                  aria-live="assertive"
                >
                  &#10003; Correct
                </div>
              </div> */}
    </form>
  );
};

export default NewPasswordForm;
