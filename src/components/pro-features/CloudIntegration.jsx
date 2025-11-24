import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const CloudIntegration = () => {
  const { currentUser } = useAuth();
  const [awsCredentials, setAwsCredentials] = useState({ accessKey: '', secretKey: '' });
  const [gcpCredentials, setGcpCredentials] = useState({ jsonFile: '' });
  const [azureCredentials, setAzureCredentials] = useState({ connectionString: '' });

  const handleSave = (provider) => {
    if (!currentUser.isPro) {
      alert('Cloud integrations are only available for Pro users.');
      return;
    }
    
    // Save credentials logic here
    console.log(`Saving ${provider} credentials`);
  };

  if (!currentUser.isPro) {
    return (
      <div className="pro-restricted">
        <h3>Cloud Integration (Pro Feature)</h3>
        <p>Upgrade to Pro to connect your cloud accounts.</p>
      </div>
    );
  }

  return (
    <div className="cloud-integration">
      <h3>Cloud Integrations</h3>
      
      {/* AWS Integration */}
      <div className="integration-section">
        <h4>AWS</h4>
        <input 
          type="password" 
          placeholder="Access Key" 
          value={awsCredentials.accessKey}
          onChange={(e) => setAwsCredentials({...awsCredentials, accessKey: e.target.value})}
        />
        <input 
          type="password" 
          placeholder="Secret Key" 
          value={awsCredentials.secretKey}
          onChange={(e) => setAwsCredentials({...awsCredentials, secretKey: e.target.value})}
        />
        <button onClick={() => handleSave('AWS')}>Save AWS Credentials</button>
      </div>
      
      {/* GCP Integration */}
      <div className="integration-section">
        <h4>Google Cloud Platform</h4>
        <textarea 
          placeholder="Paste your service account JSON"
          value={gcpCredentials.jsonFile}
          onChange={(e) => setGcpCredentials({...gcpCredentials, jsonFile: e.target.value})}
        />
        <button onClick={() => handleSave('GCP')}>Save GCP Credentials</button>
      </div>
      
      {/* Azure Integration */}
      <div className="integration-section">
        <h4>Microsoft Azure</h4>
        <input 
          type="password" 
          placeholder="Connection String" 
          value={azureCredentials.connectionString}
          onChange={(e) => setAzureCredentials({...azureCredentials, connectionString: e.target.value})}
        />
        <button onClick={() => handleSave('Azure')}>Save Azure Credentials</button>
      </div>
    </div>
  );
};

export default CloudIntegration;
