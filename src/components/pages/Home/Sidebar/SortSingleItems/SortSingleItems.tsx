import React from 'react';
import SidebarItems from '../SidebarItems/SidebarItems';

const SortSingleItems: React.FC = () => {
  const [selectedSingleItem, setSelectedSingleItem] = React.useState<string | null>(null);

  const singleItems = ['New', 'Best sellers'];

  const handleSingleItemClick = (item: string) => {
    setSelectedSingleItem(item);
  };

  return (
    <>
      <ul className="single">
        <SidebarItems
          items={singleItems}
          selectedItem={selectedSingleItem}
          handleItemClick={handleSingleItemClick}
        />
      </ul>
    </>
  );
};

export default SortSingleItems;
