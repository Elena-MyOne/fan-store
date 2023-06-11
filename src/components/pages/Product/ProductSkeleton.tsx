import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductSkeleton: React.FC = () => {
  return (
    <div className="bg-white p-3 m-auto">
      <ContentLoader
        speed={2}
        max-width={600}
        height={250}
        viewBox="0 0 600 250"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="2" y="5" rx="0" ry="0" width="220" height="165" />
        <rect x="305" y="3" rx="0" ry="0" width="250" height="25" />
        <rect x="290" y="32" rx="0" ry="0" width="28" height="1" />
        <rect x="250" y="51" rx="0" ry="0" width="354" height="25" />
        <rect x="250" y="90" rx="0" ry="0" width="354" height="25" />
        <rect x="250" y="130" rx="0" ry="0" width="354" height="25" />
        <rect x="250" y="172" rx="0" ry="0" width="354" height="25" />
        <rect x="287" y="217" rx="20" ry="20" width="120" height="30" />
        <rect x="446" y="219" rx="20" ry="20" width="120" height="30" />
      </ContentLoader>
    </div>
  );
};

export default ProductSkeleton;
