import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, ClockIcon } from '@heroicons/react/solid';

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
      to={`/restaurant/${id}`}
      className="restaurant-card-link"
    >
      <div id="restaurant-card">
        {/* Image */}
        <div id="restaurant-image-container">
          <img 
            src={imageUrl} 
            alt={name} 
            id="restaurant-image"
          />
          {featured && (
            <div id="featured-badge">
              Featured
            </div>
          )}
        </div>
        
        {/* Content */}
        <div id="restaurant-content">
          <div id="restaurant-header">
            <div id="restaurant-info">
              <h3 id="restaurant-name">{name}</h3>
              <p id="restaurant-cuisine">{cuisineType}</p>
            </div>
            <div id="restaurant-rating">
              <StarIcon className="rating-icon" />
              <span id="rating-value">{rating.toFixed(1)}</span>
            </div>
          </div>
          
          <div id="restaurant-footer">
            <div id="delivery-time">
              <ClockIcon className="clock-icon" />
              <span>{deliveryTime} min</span>
            </div>
            <div id="min-order">
              Min: ${minOrderAmount.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;