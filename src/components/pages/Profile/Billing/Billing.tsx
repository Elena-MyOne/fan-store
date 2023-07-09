import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCheckout, setIsSubmit } from '../../../../redux/slices/CheckoutSlice';
import { hideDateFromString } from '../../../../utils/hideDateFromString';
import { Link } from 'react-router-dom';
import { ROUTER_PATH } from '../../../../models/enums';
import { AppDispatch } from '../../../../redux/store';

const Billing: React.FC = () => {
  const { isSubmit, cardNumber, holderName, expirationDate, cvc } = useSelector(selectCheckout);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className="billing">
      {isSubmit ? (
        <div className="flex justify-center flex-col gap-8 mb-8">
          <h2 className="subtitle font-semibold text-center">Billing information</h2>
          <div className="billing-body grid lg:grid-rows-2 lg:grid-cols-2 gap-2">
            <div className="number flex gap-4 border rounded p-4">
              <div className="text-orange-400 font-semibold">Card Number:</div>
              <div>{hideDateFromString(cardNumber, 4)}</div>
            </div>
            <div className="holder flex gap-4 border rounded p-4">
              <div className="text-orange-400 font-semibold">Card Holder:</div>
              <div>{holderName}</div>
            </div>
            <div className="date flex gap-4 border rounded p-4">
              <div className="text-orange-400 font-semibold">Expiration Date :</div>
              <div>{expirationDate}</div>
            </div>
            <div className="date flex gap-4 border rounded p-4">
              <div className="text-orange-400 font-semibold">CVC :</div>
              <div>{hideDateFromString(cvc, 1)}</div>
            </div>
          </div>
          <div className="button m-auto">
            <button onClick={() => dispatch(setIsSubmit(false))}>
              <Link
                to={`/${ROUTER_PATH.CHECKOUT}`}
                className="checkout px-6 py-2 block text-white bg-orange-500 hover:bg-orange-600 duration-300 rounded-3xl"
              >
                Change data
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="container flex justify-center items-center h-full">
          <p>No billing information provided</p>
        </div>
      )}
    </section>
  );
};

export default Billing;
