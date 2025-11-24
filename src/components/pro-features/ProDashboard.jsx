import React from 'react';
import RestrictedExport from './RestrictedExport';
import ProIndicator from '../ui/ProIndicator';
import { useAuth } from '../../contexts/AuthContext';

const ProDashboard = ({ onExportCode }) => {
  const { currentUser } = useAuth();

  return (
    <div className="dashboard">
      <h1>AI Studio Dashboard</h1>
      
      <div className="dashboard-actions">
        <ProIndicator featureName="Export Code">
          <RestrictedExport onExport={onExportCode} />
        </ProIndicator>
        
        {currentUser.isPro ? (
          <button className="pro-feature">Advanced Analytics</button>
        ) : (
          <ProIndicator featureName="Advanced Analytics">
            <button className="pro-feature disabled">Advanced Analytics</button>
          </ProIndicator>
        )}
      </div>
      
      {!currentUser.isPro && (
        <div className="upgrade-prompt">
          <h3>Upgrade to Pro</h3>
          <p>Unlock all features and remove limitations</p>
        </div>
      )}
    </div>
  );
};

export default ProDashboard;
