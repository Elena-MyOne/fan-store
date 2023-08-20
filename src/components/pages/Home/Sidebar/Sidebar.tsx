import React from 'react';
import SortSidebarItems from './SortSidebarItems/SortSidebarItems';
import ResetFilters from './ResetFilters/ResetFilters';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar w-64 md:border-none border rounded-lg border-gray-300 p-4">
      <h3 className="title font-semibold text-lg mb-4">Sort by</h3>
      <div className="body">
        <SortSidebarItems />
        <ResetFilters />
      </div>
    </aside>
  );
};

export default Sidebar;
