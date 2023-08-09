import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../redux/slices/CartSlice';
import SuccessCheckoutPopup from './SuccessCheckoutPopup/SuccessCheckoutPopup';
import {
  selectCheckout,
  setCardCvc,
  setCardHolderName,
  setCardNumber,
  setExpirationDate,
  setCheckoutFormSubmitError,
  setSuccessCheckoutFormSubmit,
  validateCardCvc,
  validateCardHolderName,
  validateCardNumber,
} from '../../../redux/slices/CheckoutSlice';

const Checkout: React.FC = () => {
  const {
    cardNumber,
    cardNumberSuccess,
    isCardNumberError,
    holderName,
    holderNameSuccess,
    isHolderNameError,
    expirationDate,
    expirationDateSuccess,
    isExpirationDateError,
    cvc,
    cvcSuccess,
    isCvcError,
    isSubmit,
  } = useSelector(selectCheckout);
  const dispatch = useDispatch();

  const [isNumberVisible, setIsNumberVisible] = React.useReducer((prev) => !prev, false);
  const [isCvcVisible, setIsCvcVisible] = React.useReducer((prev) => !prev, false);

  const maxCardNumberLength = 16;

  function handleCardNumber(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    dispatch(setCardNumber(inputValue));
    dispatch(validateCardNumber());
  }

  function handleHolderName(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    dispatch(setCardHolderName(inputValue));
    dispatch(validateCardHolderName());
  }

  function handleExpirationDate(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    dispatch(setExpirationDate(inputValue));
  }

  function handleCvc(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    dispatch(setCardCvc(inputValue));
    dispatch(validateCardCvc());
  }

  function handelForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (cardNumberSuccess && expirationDateSuccess && holderNameSuccess && cvcSuccess) {
      dispatch(setSuccessCheckoutFormSubmit());
      dispatch(clearCart());
    } else {
      dispatch(setCheckoutFormSubmitError());
    }
  }

  const inputStyles =
    'border rounded px-2 py-1 w-full outline-none focus:border-orange-300 duration-300 hover:border-orange-400';
  const errorInputStyles =
    'border rounded px-2 py-1 w-full outline-none border-red-600 duration-300 hover:border-orange-400';
  const errorStyle = 'error text-red-600';
  const successInputValueStyle = 'success text-green-600';
  const hiddenElementStyle = 'hidden';
  const iconActiveStyle = 'w-[20px] h-[20px] text-orange-500';
  const iconHiddenStyle = 'w-[20px] h-[20px] text-gray-500';

  return (
    <div className="flex justify-center items-center bg-gray-100 h-full">
      {isSubmit ? (
        <SuccessCheckoutPopup />
      ) : (
        <div className="title bg-white p-4 rounded border">
          <h2 className="title text-center font-semibold text-lg mb-3">Payment details</h2>
          <p className="text text-center text-gray-500 mb-5">
            Please enter payment details in the form below
          </p>
          <form className="form" onSubmit={handelForm}>
            <div className="body grid grid-cols-[2fr_1fr] grid-rows-2 gap-4 mb-7">
              <div className="number mb-2">
                <label className="relative">
                  <p className="pb-1 text-gray-500">Card number</p>
                  <input
                    type={isNumberVisible ? 'text' : 'password'}
                    className={`number ${isCardNumberError ? errorInputStyles : inputStyles}`}
                    value={cardNumber}
                    onChange={handleCardNumber}
                    maxLength={maxCardNumberLength}
                  />
                  <div className="icon absolute top-[65%] right-2" onClick={setIsNumberVisible}>
                    <svg
                      className={isNumberVisible ? iconActiveStyle : iconHiddenStyle}
                      viewBox="0 -960 960 960"
                    >
                      <path
                        className="fill-current"
                        d="M480.208-344.232q64.638 0 110.099-45.669 45.461-45.67 45.461-110.307 0-64.638-45.669-110.099-45.67-45.461-110.307-45.461-64.638 0-110.099 45.669-45.461 45.67-45.461 110.307 0 64.638 45.669 110.099 45.67 45.461 110.307 45.461Zm-.511-44.922q-46.312 0-78.428-32.418-32.115-32.419-32.115-78.731t32.418-78.428q32.419-32.115 78.731-32.115t78.428 32.418q32.115 32.419 32.115 78.731t-32.418 78.428q-32.419 32.115-78.731 32.115Zm.358 169.153q-137.593 0-249.823-77.038Q118.001-374.078 61.54-500q56.461-125.922 168.637-202.961 112.175-77.038 249.768-77.038 137.593 0 249.823 77.038Q841.999-625.922 898.46-500q-56.461 125.922-168.637 202.961-112.175 77.038-249.768 77.038ZM480-500Zm-.169 234.615q119.246 0 218.823-63.769Q798.23-392.923 850.461-500 798.23-607.077 698.822-670.846q-99.408-63.769-218.653-63.769-119.246 0-218.823 63.769Q161.77-607.077 108.924-500q52.846 107.077 152.254 170.846 99.408 63.769 218.653 63.769Z"
                      />
                    </svg>
                  </div>
                </label>
                <p className={isCardNumberError ? errorStyle : hiddenElementStyle}>
                  Please enter valid card number
                </p>
                <p className={cardNumberSuccess ? successInputValueStyle : hiddenElementStyle}>
                  &#10003; Correct
                </p>
              </div>
              <div className="date mb-2">
                <label>
                  <p className="pb-1 text-gray-500">MM/YY</p>
                  <input
                    type="text"
                    className={`date ${isExpirationDateError ? errorInputStyles : inputStyles}`}
                    value={expirationDate}
                    onChange={handleExpirationDate}
                    maxLength={5}
                  />
                </label>
                <p className={isExpirationDateError ? errorStyle : hiddenElementStyle}>
                  Please enter expiration date
                </p>
                <p className={expirationDateSuccess ? successInputValueStyle : hiddenElementStyle}>
                  &#10003; Correct
                </p>
              </div>
              <div className="holder">
                <label>
                  <p className="pb-1 text-gray-500">Card Holder Name</p>
                  <input
                    type="text"
                    className={`holder ${isHolderNameError ? errorInputStyles : inputStyles}`}
                    value={holderName}
                    onChange={handleHolderName}
                    minLength={1}
                  />
                </label>
                <p className={isHolderNameError ? errorStyle : hiddenElementStyle}>
                  Please enter your name
                </p>
                <p className={holderNameSuccess ? successInputValueStyle : hiddenElementStyle}>
                  &#10003; Correct
                </p>
              </div>
              <div className="cvc">
                <label className="relative">
                  <p className="pb-1 text-gray-500">CVC</p>
                  <input
                    type={isCvcVisible ? 'text' : 'password'}
                    className={`cvc ${isCvcError ? errorInputStyles : inputStyles}`}
                    value={cvc}
                    onChange={handleCvc}
                    maxLength={3}
                  />
                  <div className="icon absolute top-[65%] right-2" onClick={setIsCvcVisible}>
                    <svg
                      className={isCvcVisible ? iconActiveStyle : iconHiddenStyle}
                      viewBox="0 -960 960 960"
                    >
                      <path
                        className="fill-current"
                        d="M480.208-344.232q64.638 0 110.099-45.669 45.461-45.67 45.461-110.307 0-64.638-45.669-110.099-45.67-45.461-110.307-45.461-64.638 0-110.099 45.669-45.461 45.67-45.461 110.307 0 64.638 45.669 110.099 45.67 45.461 110.307 45.461Zm-.511-44.922q-46.312 0-78.428-32.418-32.115-32.419-32.115-78.731t32.418-78.428q32.419-32.115 78.731-32.115t78.428 32.418q32.115 32.419 32.115 78.731t-32.418 78.428q-32.419 32.115-78.731 32.115Zm.358 169.153q-137.593 0-249.823-77.038Q118.001-374.078 61.54-500q56.461-125.922 168.637-202.961 112.175-77.038 249.768-77.038 137.593 0 249.823 77.038Q841.999-625.922 898.46-500q-56.461 125.922-168.637 202.961-112.175 77.038-249.768 77.038ZM480-500Zm-.169 234.615q119.246 0 218.823-63.769Q798.23-392.923 850.461-500 798.23-607.077 698.822-670.846q-99.408-63.769-218.653-63.769-119.246 0-218.823 63.769Q161.77-607.077 108.924-500q52.846 107.077 152.254 170.846 99.408 63.769 218.653 63.769Z"
                      />
                    </svg>
                  </div>
                </label>
                <p className={isCvcError ? errorStyle : hiddenElementStyle}>
                  Please enter three numbers
                </p>
                <p className={cvcSuccess ? successInputValueStyle : hiddenElementStyle}>
                  &#10003; Correct
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="px-10 py-2 block text-white bg-orange-500 hover:bg-orange-600 duration-300 rounded-3xl cursor-pointer m-auto"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
