// RestaurantCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, ClockIcon } from '@heroicons/react/solid';
import './RestaurantCard.css'; // Import the CSS file

const RestaurantCard = ({ restaurant }) => {
  const {
    id,
    name,
    cuisineType,
    imageUrl,
    rating,
    deliveryTime,
    minOrderAmount,
    featured
  } = restaurant;

  return (
    <Link 
      to={/restaurant/${id}}
      className="block group"
    >
      <div className="restaurant-card">
        {/* Image */}
        <div className="image-container">
          <img 
            src={imageUrl} 
            alt={name} 
          />
          {featured && (
            <div className="featured-badge">
              Featured
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="card-content">
          <div className="card-header">
            <div>
              <h3 className="card-title">{name}</h3>
              <p className="cuisine-type">{cuisineType}</p>
              </div>
            <div className="rating-badge">
              <StarIcon className="delivery-time-icon" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="card-footer">
            <div className="delivery-time">
              <ClockIcon className="delivery-time-icon" />
              <span>{deliveryTime} min</span>
            </div>
            <div className="min-order">
              Min: ${minOrderAmount.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;