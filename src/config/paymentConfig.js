// Payment Gateway Configuration

export const PAYMENT_CONFIG = {
  GPay: {
    merchantId: process.env.REACT_APP_GPAY_MERCHANT_ID,
    environment: process.env.NODE_ENV === 'production' ? 'PRODUCTION' : 'TEST',
    apiVersion: 2,
  },
  PayU: {
    merchantId: process.env.REACT_APP_PAYU_MERCHANT_ID,
    publicKey: process.env.REACT_APP_PAYU_PUBLIC_KEY,
    environment: process.env.NODE_ENV === 'production' ? 'secure' : 'sandbox',
  }
};

export const SUBSCRIPTION_PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    features: [
      'Basic AI features',
      'Limited exports',
      'Community support'
    ]
  },
  PRO: {
    name: 'Pro',
    price: 29.99,
    features: [
      'All Free features',
      'Cloud Integrations (AWS, GCP, Azure)',
      'Git Integration & CD',
      'Unlimited Export Code',
      'Priority Support',
      'Advanced Analytics'
    ]
  }
};
