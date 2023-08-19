import React from 'react';
import SidebarItems from '../SidebarItems/SidebarItems';

const SortSaleItems: React.FC = () => {
  const [selectedSaleItem, setSelectedSaleItem] = React.useState<string | null>(null);

  const saleItems = ['High to low', 'Low to high', '30% - 20%', '15% - 5%'];

  const handleSaleItemClick = (item: string) => {
    setSelectedSaleItem(item);
  };

  const titleStyles = 'title font-semibold py-4';

  return (
    <>
      <h4 className={titleStyles}>Sale:</h4>
      <ul className="sale">
        <SidebarItems
          items={saleItems}
          selectedItem={selectedSaleItem}
          handleItemClick={handleSaleItemClick}
        />
      </ul>
    </>
  );
};

export default SortSaleItems;
