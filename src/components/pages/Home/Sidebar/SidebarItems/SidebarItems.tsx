import React from 'react';

interface SidebarItemsProps {
  items: string[];
  selectedItem: string | null;
  handleItemClick: (item: string) => void;
}

const SidebarItems: React.FC<SidebarItemsProps> = ({ items, selectedItem, handleItemClick }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index} className="item mb-2 flex items-center gap-2">
          <label className="flex justify-center items-center gap-2">
            <input
              type="radio"
              name="price"
              className="text-xl hidden"
              checked={selectedItem === item}
              value={item}
              onChange={() => handleItemClick(item)}
            />
            <span className="flex h-5 w-5 border border-gray-400 rounded-full justify-center items-center">
              <span
                className={
                  selectedItem === item
                    ? 'h-3 w-3 bg-orange-400 rounded-full opacity-1 duration-300'
                    : 'h-3 w-3 bg-orange-400 rounded-full opacity-0 duration-300'
                }
              ></span>
            </span>
            <span>{item}</span>
          </label>
        </li>
      ))}
    </>
  );
};

export default SidebarItems;
