import React from 'react';
import SidebarItems from '../SidebarItems/SidebarItems';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilter,
  setOrder,
  setSale,
  setSelectedSidebarItem,
  setSort,
} from '../../../../../redux/slices/FilterSlice';
import { AppDispatch } from '../../../../../redux/store';
import { ORDER, SALE, SORT } from '../../../../../models/enums';
import { PRICE_ITEMS, RATING_ITEMS, SALE_ITEMS } from '../../../../../models/globalVariables';

const SortSidebarItems: React.FC = () => {
  const { selectedSidebarItem } = useSelector(selectFilter);
  const dispatch = useDispatch<AppDispatch>();

  const titleStyles = 'title font-semibold py-4';

  const singleItems = ['New', 'Best sellers'];

  const handleItemClick = (item: string) => {
    dispatch(setSelectedSidebarItem(item));
  };

  React.useEffect(() => {
    switch (selectedSidebarItem) {
      case RATING_ITEMS.DESC:
        dispatch(setSort(SORT.RATE));
        dispatch(setOrder(ORDER.DESC));
        break;
      case RATING_ITEMS.ASC:
        dispatch(setSort(SORT.RATE));
        dispatch(setOrder(ORDER.ASC));
        break;
      case PRICE_ITEMS.DESC:
        dispatch(setSort(SORT.PRICE));
        dispatch(setOrder(ORDER.DESC));
        break;
      case PRICE_ITEMS.ASC:
        dispatch(setSort(SORT.PRICE));
        dispatch(setOrder(ORDER.ASC));
        break;
      case SALE_ITEMS.DESC:
        dispatch(setSort(SORT.SALE));
        dispatch(setOrder(ORDER.DESC));
        dispatch(setSale(SALE.TRUE));
        break;
      case SALE_ITEMS.ASC:
        dispatch(setSort(SORT.SALE));
        dispatch(setOrder(ORDER.ASC));
        dispatch(setSale(SALE.TRUE));
        break;
      default:
        dispatch(setSort(SORT.DEFAULT));
        dispatch(setOrder(ORDER.DEFAULT));
        dispatch(setSale(SALE.DEFAULT));
    }
  }, [dispatch, selectedSidebarItem]);

  return (
    <>
      <ul className="single">
        <SidebarItems
          items={singleItems}
          selectedItem={selectedSidebarItem}
          handleItemClick={handleItemClick}
        />
        <h4 className={titleStyles}>Rating:</h4>
        <ul className="rating text-gray-700">
          <SidebarItems
            items={Object.values(RATING_ITEMS)}
            selectedItem={selectedSidebarItem}
            handleItemClick={handleItemClick}
          />
        </ul>
        <h4 className={titleStyles}>Price:</h4>
        <ul className="price">
          <SidebarItems
            items={Object.values(PRICE_ITEMS)}
            selectedItem={selectedSidebarItem}
            handleItemClick={handleItemClick}
          />
        </ul>
      </ul>
      <h4 className={titleStyles}>Sale:</h4>
      <ul className="sale">
        <SidebarItems
          items={Object.values(SALE_ITEMS)}
          selectedItem={selectedSidebarItem}
          handleItemClick={handleItemClick}
        />
      </ul>
    </>
  );
};

export default SortSidebarItems;
