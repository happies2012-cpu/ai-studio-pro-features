import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const RestrictedExport = ({ onExport }) => {
  const { currentUser } = useAuth();

  const handleClick = () => {
    if (!currentUser.isPro) {
      alert('Export Code is only available for Pro users. Please upgrade your account.');
      return;
    }
    onExport();
  };

  return (
    <button onClick={handleClick} className={`export-button ${!currentUser.isPro ? 'restricted' : ''}`}>
      {currentUser.isPro ? 'Export Code' : 'Export Code (Pro)'}
      {!currentUser.isPro && <span className="lock-icon">🔒</span>}
    </button>
  );
};

export default RestrictedExport;
