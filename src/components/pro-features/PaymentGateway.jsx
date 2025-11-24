import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const PaymentGateway = ({ onUpgrade }) => {
  const { currentUser } = useAuth();

  const handlePayment = (gateway) => {
    // Payment processing logic here
    console.log(`Processing payment through ${gateway}`);
    
    // Simulate successful payment
    setTimeout(() => {
      onUpgrade();
      alert('Payment successful! Your account has been upgraded to Pro.');
    }, 1000);
  };

  return (
    <div className="payment-gateway">
      <h3>Upgrade to Pro</h3>
      <p>Unlock all premium features with a Pro subscription.</p>
      
      <div className="payment-options">
        <button onClick={() => handlePayment('GPay')} className="payment-button gpay">
          Pay with Google Pay
        </button>
        <button onClick={() => handlePayment('PayU')} className="payment-button payu">
          Pay with PayU
        </button>
      </div>
      
      <div className="pro-features-list">
        <h4>Pro Features:</h4>
        <ul>
          <li>Cloud Integrations (AWS, GCP, Azure)</li>
          <li>Git Integration & Continuous Deployment</li>
          <li>Unlimited Export Code Access</li>
          <li>Priority Support</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentGateway;
