import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_PATH } from '../../../../models/enums';
import style from './BestSellers.module.scss';

const BestSellers: React.FC = () => {
  return (
    <section className="pt-10">
      <div className={style.body}>
        <div className="bg-[rgba(0,0,0,0.2)]">
          <div className="content text-white container m-auto md:text-xl">
            <div className="lg:max-w-lg ml-auto md:py-36 py-10 px-6 text-right bg-[rgba(0,0,0,0.4)]">
              <h2 className="font-fjalla md:text-3xl text-xl mb-6">Best Sellers</h2>
              <p className="text ">
                Explore a selection of best-selling Harry Potter merchandise, including exclusive
                collectibles, bespoke wands, souvenirs, delicious confectionery, fan-favorites and
                more, perfect for gifting any witch or wizard to add to their collection.
              </p>
              <Link
                className="inline-block bg-gray-200 hover:bg-orange-500 px-4 py-2 text-black hover:text-white rounded-3xl mt-8 md:mb-10 mb-0 duration-300"
                to={ROUTER_PATH.HOME}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
