import React from 'react';
import CloudIntegration from './CloudIntegration';
import GitIntegration from './GitIntegration';
import { useAuth } from '../../contexts/AuthContext';

const EnhancedSettings = () => {
  const { currentUser } = useAuth();

  return (
    <div className="enhanced-settings">
      <h2>Project Settings</h2>
      
      {!currentUser.isPro && (
        <div className="pro-banner">
          <h3>Unlock Pro Features</h3>
          <p>Upgrade to access Cloud Integrations, Git Integration, and more.</p>
        </div>
      )}
      
      <CloudIntegration />
      <GitIntegration />
      
      {/* Other existing settings would go here */}
    </div>
  );
};

export default EnhancedSettings;
