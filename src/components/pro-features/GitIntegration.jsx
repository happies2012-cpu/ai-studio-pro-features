import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const GitIntegration = () => {
  const { currentUser } = useAuth();
  const [gitRepo, setGitRepo] = useState('');
  const [deployOnPush, setDeployOnPush] = useState(false);

  const handleConnect = () => {
    if (!currentUser.isPro) {
      alert('Git integration is only available for Pro users.');
      return;
    }
    
    // Connect to GitHub logic here
    console.log('Connecting to GitHub repo:', gitRepo);
  };

  if (!currentUser.isPro) {
    return (
      <div className="pro-restricted">
        <h3>Git Integration (Pro Feature)</h3>
        <p>Upgrade to Pro to connect your GitHub repository.</p>
      </div>
    );
  }

  return (
    <div className="git-integration">
      <h3>Git Integration</h3>
      <div className="integration-section">
        <input 
          type="text" 
          placeholder="GitHub Repository URL" 
          value={gitRepo}
          onChange={(e) => setGitRepo(e.target.value)}
        />
        <button onClick={handleConnect}>Connect to GitHub</button>
        
        <div className="deployment-options">
          <label>
            <input 
              type="checkbox" 
              checked={deployOnPush}
              onChange={(e) => setDeployOnPush(e.target.checked)}
            />
            Deploy automatically on push
          </label>
        </div>
      </div>
    </div>
  );
};

export default GitIntegration;
