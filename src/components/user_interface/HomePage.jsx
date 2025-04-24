//HomePage.jsx
// Import necessary libraries and components

import React, { useState, useEffect } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Loader from '../components/Loader';
import { useFetchRestaurants } from '../hooks/useFetchRestaurants';
import { SearchIcon, AdjustmentsIcon } from '@heroicons/react/outline';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('');
  const { restaurants, loading, error } = useFetchRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // cuisine for filter
  const cuisines = ['All', 'Nyama Choma', 'Coastal', 'Indian', 'Ethiopian', 'Fast Food', 'Chinese', 'Italian'];

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
    <div id="error-container">
      <p id="error-message">Error loading restaurants. Please try again later.</p>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <div id="hero-section">
        <h1 id="hero-title">Hungry? We've got you covered!</h1>
        <p id="hero-subtitle">Order food from the finest restaurants in your area.</p>
        
        {/* Search Bar */}
        <div id="search-container">
          <input
            type="text"
            placeholder="Search for restaurants or cuisines..."
            id="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div id="search-icon">
            <SearchIcon />
          </div>
          <button 
            id="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <AdjustmentsIcon />
          </button>
        </div>
      </div>
      
      {/* Filters */}
      {showFilters && (
        <div id="filters-container">
          <h2 id="filters-title">Filter by Cuisine:</h2>
          <div id="cuisine-filters">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine}
                className={cuisineFilter === cuisine ? "cuisine-button active" : "cuisine-button"}
                onClick={() => setCuisineFilter(cuisine === 'All' ? '' : cuisine)}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Featured Restaurants */}
      <section id="featured-restaurants">
        <h2 id="featured-title">Featured Restaurants</h2>
        {filteredRestaurants.length > 0 ? (
          <div id="featured-grid">
            {filteredRestaurants
              .filter(restaurant => restaurant.featured)
              .map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
          </div>
        ) : (
          <p id="no-featured">No featured restaurants available.</p>
        )}
      </section>
      
      {/* All Restaurants */}
      <section id="all-restaurants">
        <h2 id="all-restaurants-title">All Restaurants</h2>
        {filteredRestaurants.length > 0 ? (
          <div id="restaurants-grid">
            {filteredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        ) : (
          <p id="no-restaurants">No restaurants found matching your criteria.</p>
        )}
      </section>
    </div>
  );
};

export default HomePage;