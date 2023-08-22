import React from 'react';
import debounce from 'lodash.debounce';
import { selectSearch, setSearchProduct } from '../../../../redux/slices/SearchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';

const Search = () => {
  const { searchProduct } = useSelector(selectSearch);
  const dispatch = useDispatch<AppDispatch>();

  const inputElement = React.useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = React.useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = React.useCallback(
    debounce((string: string) => {
      dispatch(setSearchProduct(string));
    }, 250),
    []
  );

  function onClickClear() {
    setInputValue('');
    dispatch(setSearchProduct(''));
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }

  function onChangeInput(e: { target: { value: string } }) {
    setInputValue(e.target.value);
    updateSearchValue(e.target.value);
  }

  return (
    <div className="bg-gray-800 py-3">
      <div className="search relative text-white self-center mx-auto container">
        <button className="hover:text-orange-500 duration-300 absolute top-0 left-2">
          <svg className="w-[25px] h-[35px]" viewBox="0 96 960 960">
            <path
              className="fill-current"
              d="M790.615 918.46 531.077 658.922q-29.848 26.414-69.61 40.707t-82.313 14.293q-101.873 0-172.436-70.514t-70.563-170.999q0-100.485 70.514-171.062 70.514-70.577 171.219-70.577 100.706 0 171.255 70.533 70.548 70.532 70.548 171.054 0 42.028-14.384 81.835-14.385 39.808-41.616 72.115l260.154 258.539-33.23 33.614ZM378.539 668.539q81.955 0 138.862-57.116 56.907-57.115 56.907-139.077 0-81.961-56.907-139.077-56.907-57.115-138.862-57.115-82.468 0-139.734 57.115-57.266 57.116-57.266 139.077 0 81.962 57.266 139.077 57.266 57.116 139.734 57.116Z"
            />
          </svg>
        </button>
        <input
          className="outline-none py-1 pl-10 pr-8 w-full rounded-xl border border-gray-500 hover:border-orange-300 duration-300 focus:border-orange-300 bg-gray-800"
          type="text"
          placeholder="Search ..."
          value={searchProduct ? searchProduct : inputValue}
          onChange={onChangeInput}
          ref={inputElement}
        />
        {searchProduct && (
          <button
            className="clear hover:text-orange-500 duration-300 absolute top-0.5 right-2"
            onClick={onClickClear}
          >
            <svg className="w-[20px] h-[30px]" viewBox="0 96 960 960">
              <path
                className="fill-current"
                d="m250.923 837.076-31.999-31.999L448.001 576 218.924 346.923l31.999-31.999L480 544.001l229.077-229.077 31.999 31.999L511.999 576l229.077 229.077-31.999 31.999L480 607.999 250.923 837.076"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
