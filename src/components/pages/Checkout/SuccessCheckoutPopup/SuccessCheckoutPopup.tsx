import React from 'react';
import { ROUTER_PATH } from '../../../../models/enums';
import { Link } from 'react-router-dom';
import img from '../../../../assets/images/pages/checkout/1.png';

const SuccessCheckoutPopup: React.FC = () => {
  return (
    <div className="title bg-white p-4 rounded border text-center w-80">
      <h2 className="title text-center font-semibold text-lg mb-5">Success</h2>
      <img className="mb-5 inline-block" src={img} alt="post owl" />
      <p className="text-md mb-5 font-semibold">
        The Purchase will be delivered within 7 days. Thank you for shopping with us!
      </p>
      <Link
        to={`/${ROUTER_PATH.HOME}`}
        className="mb-5 px-6 py-2 block text-white bg-gray-800 hover:bg-gray-900 duration-300 rounded-3xl"
      >
        Shop now
      </Link>
      <p className="text-red-600 mb-5">
        **The data from this page will not be stored, the &quot;Payment details&quot; form is made
        for training purposes only.
      </p>
    </div>
  );
};

export default SuccessCheckoutPopup;
