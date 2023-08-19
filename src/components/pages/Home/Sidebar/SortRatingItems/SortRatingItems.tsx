import React from 'react';
import SidebarItems from '../SidebarItems/SidebarItems';

const SortRatingItems: React.FC = () => {
  const [selectedRatingItem, setSelectedRatingItem] = React.useState<string | null>(null);

  const ratingItems = ['High to low', 'Low to high', '★ ★ ★ ★ ★', '★ ★ ★ ★', '★ ★ ★', '★ ★', '★'];

  const handleRatingItemClick = (item: string) => {
    setSelectedRatingItem(item);
  };

  const titleStyles = 'title font-semibold py-4';

  return (
    <>
      <div className="body">
        <h4 className={titleStyles}>Rating:</h4>
        <ul className="rating text-gray-700">
          <SidebarItems
            items={ratingItems}
            selectedItem={selectedRatingItem}
            handleItemClick={handleRatingItemClick}
          />
        </ul>
      </div>
    </>
  );
};

export default SortRatingItems;
