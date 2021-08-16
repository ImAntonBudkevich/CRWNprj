import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    'pk_test_51JP5FVLyXqihZ6KHY9z910qyLGzYFy9JXbxQM5ijRBLKJlhEyJqvr9KxTB9GcaFI4cLFfjwSlbVmizPL1boK6A61000JBP8Erj';

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
