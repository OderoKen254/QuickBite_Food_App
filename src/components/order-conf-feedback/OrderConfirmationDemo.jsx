import React, { useState } from 'react';
import OrderConfirmation from './OrderConfirmation';
import useStoreOrder from '../../hooks/useStoreOrder';

const OrderConfirmationDemo = () => {
  const { submitOrder, orderStatus } = useStoreOrder();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePlaceOrder = async () => {
    // Example order data
    const orderData = {
      items: [
        { id: 101, name: 'Classic Burger', quantity: 2, price: 8.99 },
        { id: 102, name: 'Cheese Fries', quantity: 1, price: 4.99 }
      ],
      totalAmount: 22.97,
      address: '123 Main St, City',
      paymentMethod: 'Credit Card'
    };

    await submitOrder(orderData);
    setShowConfirmation(true);
  };

  const handleClose = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="order-demo">
      <h2>Order Confirmation Demo</h2>
      <button onClick={handlePlaceOrder} disabled={orderStatus.loading}>
        {orderStatus.loading ? 'Processing...' : 'Place Order'}
      </button>

      {showConfirmation && (
        <OrderConfirmation
          status={orderStatus.success ? 'success' : orderStatus.error ? 'error' : null}
          orderId={orderStatus.orderId}
          errorMessage={orderStatus.error}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default OrderConfirmationDemo;