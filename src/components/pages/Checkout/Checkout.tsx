import React, { ChangeEvent, FormEvent } from 'react';
import { formateCardExpirationDate } from '../../../utils/formateCardExpirationDate';

interface paymentInfoData {
  cardNumber: string;
  holderName: string;
  expirationDate: string;
  cvc: string;
  isCardNumberError: boolean;
  isHolderNameError: boolean;
  isExpirationDateError: boolean;
  isCvcError: boolean;
  cardNumberSuccess: boolean;
  holderNameSuccess: boolean;
  expirationDateSuccess: boolean;
  cvcSuccess: boolean;
}

const Checkout = () => {
  const [paymentInfo, setPaymentInfo] = React.useState<paymentInfoData>({
    cardNumber: '',
    holderName: '',
    expirationDate: '',
    cvc: '',
    isCardNumberError: false,
    isHolderNameError: false,
    isExpirationDateError: false,
    isCvcError: false,
    cardNumberSuccess: false,
    holderNameSuccess: false,
    expirationDateSuccess: false,
    cvcSuccess: false,
  });

  const maxCardNumberLength = 16;
  const minCardNumberLength = 13;

  function handleCardNumber(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    const isInputValueNumber = !isNaN(Number(inputValue));

    if (
      isInputValueNumber &&
      (inputValue.length >= minCardNumberLength || maxCardNumberLength <= inputValue.length)
    ) {
      setPaymentInfo({
        ...paymentInfo,
        cardNumber: inputValue,
        cardNumberSuccess: true,
      });
    } else if (isInputValueNumber) {
      setPaymentInfo({
        ...paymentInfo,
        cardNumber: inputValue,
        isCardNumberError: false,
        cardNumberSuccess: false,
      });
    } else {
      setPaymentInfo({
        ...paymentInfo,
        isCardNumberError: true,
        cardNumber: inputValue,
        cardNumberSuccess: false,
      });
    }
  }

  function handleHolderName(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    if (inputValue) {
      setPaymentInfo({
        ...paymentInfo,
        holderName: inputValue,
        holderNameSuccess: true,
        isHolderNameError: false,
      });
    } else {
      setPaymentInfo({
        ...paymentInfo,
        holderName: '',
        holderNameSuccess: false,
        isHolderNameError: true,
      });
    }
  }

  function handleExpirationDate(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;

    if (inputValue) {
      setPaymentInfo({
        ...paymentInfo,
        expirationDate: formateCardExpirationDate(inputValue),
      });
    }

    if (inputValue.length === 5) {
      setPaymentInfo({
        ...paymentInfo,
        expirationDate: formateCardExpirationDate(inputValue),
        expirationDateSuccess: true,
      });
    }

    if (inputValue === '') {
      setPaymentInfo({
        ...paymentInfo,
        expirationDate: '',
        expirationDateSuccess: false,
      });
    }
  }

  function handleCvc(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;

    if (inputValue && inputValue.length === 3 && !isNaN(Number(inputValue))) {
      setPaymentInfo({
        ...paymentInfo,
        cvc: inputValue,
        cvcSuccess: true,
        isCvcError: false,
      });
    } else if (isNaN(Number(inputValue))) {
      setPaymentInfo({
        ...paymentInfo,
        cvc: inputValue,
        cvcSuccess: false,
        isCvcError: true,
      });
    } else if (inputValue || inputValue === '') {
      setPaymentInfo({
        ...paymentInfo,
        cvc: inputValue,
        cvcSuccess: false,
        isCvcError: false,
      });
    }
  }

  function handelForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
      <div className="title bg-white p-4 rounded border">
        <h2 className="title text-center font-semibold text-lg mb-3">Payment details</h2>
        <p className="text text-center text-gray-500 mb-5">
          Please enter payment details in the form below
        </p>
        <form className="form" onSubmit={handelForm}>
          <div className="body grid grid-cols-[2fr_1fr] gap-4 mb-7">
            <div className="column max-w-[220px]">
              <div className="number mb-2">
                <label>
                  <p className="pb-1 text-gray-500">Card number</p>
                  <input
                    type="text"
                    className={`number ${
                      paymentInfo.isCardNumberError ? errorInputStyles : inputStyles
                    }`}
                    value={paymentInfo.cardNumber}
                    onChange={handleCardNumber}
                    maxLength={maxCardNumberLength}
                  />
                </label>
                <p className={paymentInfo.isCardNumberError ? errorStyle : hiddenElementStyle}>
                  Please enter valid card number
                </p>
                <p
                  className={
                    paymentInfo.cardNumberSuccess ? successInputValueStyle : hiddenElementStyle
                  }
                >
                  &#10003; Correct!
                </p>
              </div>
              <div className="holder">
                <label>
                  <p className="pb-1 text-gray-500">Card Holder Name</p>
                  <input
                    type="text"
                    className={`holder ${
                      paymentInfo.isHolderNameError ? errorInputStyles : inputStyles
                    }`}
                    value={paymentInfo.holderName}
                    onChange={handleHolderName}
                    minLength={1}
                  />
                </label>
                <p className={paymentInfo.isHolderNameError ? errorStyle : hiddenElementStyle}>
                  Please enter your name
                </p>
                <p
                  className={
                    paymentInfo.holderNameSuccess ? successInputValueStyle : hiddenElementStyle
                  }
                >
                  &#10003; Correct!
                </p>
              </div>
            </div>
            <div className="column max-w-[110px]">
              <div className="date mb-2">
                <label>
                  <p className="pb-1 text-gray-500">MM/YY</p>
                  <input
                    type="text"
                    className={`date ${
                      paymentInfo.isExpirationDateError ? errorInputStyles : inputStyles
                    }`}
                    value={paymentInfo.expirationDate}
                    onChange={handleExpirationDate}
                    maxLength={5}
                  />
                </label>
                <p className={paymentInfo.isExpirationDateError ? errorStyle : hiddenElementStyle}>
                  Please enter expiration date
                </p>
                <p
                  className={
                    paymentInfo.expirationDateSuccess ? successInputValueStyle : hiddenElementStyle
                  }
                >
                  &#10003; Correct!
                </p>
              </div>
              <div className="cvc">
                <label>
                  <p className="pb-1 text-gray-500">CVC</p>
                  <input
                    type="text"
                    className={`cvc ${paymentInfo.isCvcError ? errorInputStyles : inputStyles}`}
                    value={paymentInfo.cvc}
                    onChange={handleCvc}
                    maxLength={3}
                  />
                </label>
                <p className={paymentInfo.isCvcError ? errorStyle : hiddenElementStyle}>
                  Please enter three numbers
                </p>
                <p className={paymentInfo.cvcSuccess ? successInputValueStyle : hiddenElementStyle}>
                  &#10003; Correct!
                </p>
              </div>
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
    </div>
  );
};

export default Checkout;
