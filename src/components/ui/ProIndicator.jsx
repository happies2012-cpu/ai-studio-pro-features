import React from 'react';

const ProIndicator = ({ children, featureName }) => {
  return (
    <div className="pro-feature-wrapper">
      {children}
      <span className="pro-indicator" title={`${featureName} is a Pro feature`}>
        🔒 Pro
      </span>
    </div>
  );
};

export default ProIndicator;
