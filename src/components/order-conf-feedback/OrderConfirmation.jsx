import React from 'react';
import './OrderConfirmation.css'; 
import NotificationBanner from '../ui-components/NotificationBanner';

const OrderConfirmation = ({ 
  status, 
  orderId = null, 
  errorMessage = null,
  onClose
}) => {
  if (!status) {
    return null;
  }

  if (status === 'success') {
    return (
      <div className="order-confirmation success">
        <NotificationBanner 
          message={`Order #${orderId} placed successfully!`} 
          type="success" 
          onClose={onClose} 
        />
        
        <div className="confirmation-details">
          <div className="confirmation-icon">✅</div>
          <h2>Order Confirmed!</h2>
          <p>Thank you for your order.</p>
          <p className="order-id">Order ID: #{orderId}</p>
          <p>You will receive a confirmation email shortly with the order details.</p>
          <div className="action-buttons">
            <button className="primary-button" onClick={onClose}>Continue Shopping</button>
            <button className="secondary-button" onClick={() => window.location.href = '/orders'}>View Orders</button>
          </div>
        </div>
      </div>
    );
  } 
  
  if (status === 'error') {
    return (
      <div className="order-confirmation error">
        <NotificationBanner 
          message={errorMessage || "Failed to place order. Please try again."} 
          type="error" 
          onClose={onClose} 
        />
        
        <div className="confirmation-details">
          <div className="confirmation-icon">❌</div>
          <h2>Order Failed</h2>
          <p>{errorMessage || "There was an issue processing your order."}</p>
          <p>Please try again or contact customer support if the issue persists.</p>
          <div className="action-buttons">
            <button className="primary-button" onClick={() => window.location.reload()}>Try Again</button>
            <button className="secondary-button" onClick={onClose}>Back to Cart</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default OrderConfirmation;