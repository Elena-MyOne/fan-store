import React from 'react';
import SidebarItems from '../SidebarItems/SidebarItems';

const SortPriceItems: React.FC = () => {
  const [selectedPriceItem, setSelectedPriceItem] = React.useState<string | null>(null);

  const priceItems = [
    'High to low',
    'Low to high',
    '$25 - $40',
    '$40 - $70',
    '$70 - $100',
    '$100+',
  ];

  const titleStyles = 'title font-semibold py-4';

  const handlePriceItemClick = (item: string) => {
    setSelectedPriceItem(item);
  };

  return (
    <>
      <h4 className={titleStyles}>Price:</h4>
      <ul className="price">
        <SidebarItems
          items={priceItems}
          selectedItem={selectedPriceItem}
          handleItemClick={handlePriceItemClick}
        />
      </ul>
    </>
  );
};

export default SortPriceItems;
