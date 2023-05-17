import React from 'react';
import ContentLoader from 'react-content-loader';

const CategoriesSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={85}
      height={40}
      viewBox="0 0 85 40"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="85" height="40" />
    </ContentLoader>
  );
};

export default CategoriesSkeleton;
