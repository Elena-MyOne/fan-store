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
  setFormSubmitError,
  setSuccessFormSubmit,
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
      dispatch(setSuccessFormSubmit());
      dispatch(clearCart());
    } else {
      dispatch(setFormSubmitError());
    }
  }

  const inputStyles =
    'border rounded px-2 py-1 w-full outline-none focus:border-orange-300 duration-300 hover:border-orange-400';
  const errorInputStyles =
    'border rounded px-2 py-1 w-full outline-none border-red-600 duration-300 hover:border-orange-400';
  const errorStyle = 'error text-red-600';
  const successInputValueStyle = 'success text-green-600';
  const hiddenElementStyle = 'hidden';

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
                <label>
                  <p className="pb-1 text-gray-500">Card number</p>
                  <input
                    type="text"
                    className={`number ${isCardNumberError ? errorInputStyles : inputStyles}`}
                    value={cardNumber}
                    onChange={handleCardNumber}
                    maxLength={maxCardNumberLength}
                  />
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
                <label>
                  <p className="pb-1 text-gray-500">CVC</p>
                  <input
                    type="text"
                    className={`cvc ${isCvcError ? errorInputStyles : inputStyles}`}
                    value={cvc}
                    onChange={handleCvc}
                    maxLength={3}
                  />
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
