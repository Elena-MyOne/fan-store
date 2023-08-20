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
    const itemToSortOrderMap = {
      [RATING_ITEMS.DESC]: { sort: SORT.RATE, order: ORDER.DESC },
      [RATING_ITEMS.ASC]: { sort: SORT.RATE, order: ORDER.ASC },
      [RATING_ITEMS.FIVE]: { sort: SORT.RATE, order: ORDER.FIVE },
      [RATING_ITEMS.FOUR]: { sort: SORT.RATE, order: ORDER.FOUR },
      [RATING_ITEMS.THREE]: { sort: SORT.RATE, order: ORDER.THREE },
      [RATING_ITEMS.TWO]: { sort: SORT.RATE, order: ORDER.TWO },
      [RATING_ITEMS.ONE]: { sort: SORT.RATE, order: ORDER.ONE },
      [PRICE_ITEMS.DESC]: { sort: SORT.PRICE, order: ORDER.DESC },
      [PRICE_ITEMS.ASC]: { sort: SORT.PRICE, order: ORDER.ASC },
      [PRICE_ITEMS.PRICE25]: { sort: SORT.PRICE, order: ORDER.PRICE_25 },
      [PRICE_ITEMS.PRICE40]: { sort: SORT.PRICE, order: ORDER.PRICE_40 },
      [PRICE_ITEMS.PRICE70]: { sort: SORT.PRICE, order: ORDER.PRICE_70 },
      [PRICE_ITEMS.PRICE100]: { sort: SORT.PRICE, order: ORDER.PRICE_100 },
      [SALE_ITEMS.DESC]: { sort: SORT.SALE, order: ORDER.DESC, sale: SALE.TRUE },
      [SALE_ITEMS.ASC]: { sort: SORT.SALE, order: ORDER.ASC, sale: SALE.TRUE },
      [SALE_ITEMS.SALE30]: { sort: SORT.SALE, order: ORDER.SALE_30, sale: SALE.TRUE },
      [SALE_ITEMS.SALE15]: { sort: SORT.SALE, order: ORDER.SALE_15, sale: SALE.TRUE },
    };

    if (selectedSidebarItem !== null && selectedSidebarItem !== undefined) {
      const sortAndOrder = itemToSortOrderMap[selectedSidebarItem];
      if (sortAndOrder) {
        const { sort, order, sale } = sortAndOrder;
        dispatch(setSort(sort));
        dispatch(setOrder(order));
        if (sale !== undefined) {
          dispatch(setSale(sale));
        }
      } else {
        dispatch(setSort(SORT.DEFAULT));
        dispatch(setOrder(ORDER.DEFAULT));
        dispatch(setSale(SALE.DEFAULT));
      }
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
