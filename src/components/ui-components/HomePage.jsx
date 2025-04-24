//HomePage.js
import React, { useState, useEffect } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Loader from '../components/Loader';
import { useFetchRestaurants } from '../hooks/useFetchRestaurants';
import { SearchIcon, AdjustmentsIcon } from '@heroicons/react/outline';
import './HomePage.css';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('');
  const { restaurants, loading, error } = useFetchRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Cuisines for filter
  const cuisines = ['All', 'Nyama Choma', 'Italian', 'Chinese', 'Mexican', 'Arabian', 'Authentic Kenyan Food', 'Fast Food'];

  useEffect(() => {
    if (restaurants) {
      let filtered = [...restaurants];
      
      // Apply search filter
      if (searchTerm) {
        filtered = filtered.filter(restaurant => 
          restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.cuisineType.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      // Apply cuisine filter
      if (cuisineFilter && cuisineFilter !== 'All') {
        filtered = filtered.filter(restaurant => 
          restaurant.cuisineType === cuisineFilter
        );
      }
      
      setFilteredRestaurants(filtered);
    }
  }, [restaurants, searchTerm, cuisineFilter]);

  if (loading) return <Loader />;
  
  if (error) return (
    <div className="error-container">
      <p className="error-message">Error loading restaurants. Please try again later.</p>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Hungry? We've got you covered!</h1>
        <p className="hero-subtitle">Order food from the finest restaurants in your area.</p>
        
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for restaurants or cuisines..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search-icon">
            <SearchIcon className="icon" />
          </div>
          <button 
            className="filter-button"
            onClick={() => setShowFilters(!showFilters)}
          >
            <AdjustmentsIcon className="icon" />
          </button>
        </div>
      </div>
      
      {/* Filters */}
      {showFilters && (
        <div className="filters-container">
          <h2 className="filters-title">Filter by Cuisine:</h2>
          <div className="cuisine-filters">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine}
                className={cuisine-filter-btn ${cuisineFilter === cuisine ? 'active' : ''}}
                onClick={() => setCuisineFilter(cuisine === 'All' ? '' : cuisine)}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Featured Restaurants */}
      <section className="restaurant-section">
        <h2 className="section-title">Featured Restaurants</h2>
        {filteredRestaurants.length > 0 ? (
          <div className="restaurants-grid">
            {filteredRestaurants
              .filter(restaurant => restaurant.featured)
              .map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
          </div>
        ) : (
          <p className="empty-message">No featured restaurants available.</p>
        )}
      </section>
      
      {/* All Restaurants */}
      <section className="restaurant-section">
        <h2 className="section-title">All Restaurants</h2>
        {filteredRestaurants.length > 0 ? (
          <div className="restaurants-grid">
            {filteredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        ) : (
          <p className="empty-message">No restaurants found matching your criteria.</p>
        )}
      </section>
    </div>
  );
};

export default HomePage;