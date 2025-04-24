import { useState, useEffect } from 'react';

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await fetch('/api/restaurants');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch restaurants: ${response.status}`);
        }
        
        const data = await response.json();
        setRestaurants(data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch restaurants');
        // For development, you can use mock data when API fails
        setRestaurants(mockRestaurants);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { restaurants, loading, error };
};

// Mock data for development or when API is not available
const mockRestaurants = [
  { id: 1, name: 'Burger Palace', cuisine: 'Fast Food', rating: 4.5, deliveryTime: '25-35 min' },
  { id: 2, name: 'Pizza Heaven', cuisine: 'Italian', rating: 4.7, deliveryTime: '30-40 min' },
  { id: 3, name: 'Sushi Delight', cuisine: 'Japanese', rating: 4.8, deliveryTime: '35-45 min' },
  { id: 4, name: 'Taco Express', cuisine: 'Mexican', rating: 4.2, deliveryTime: '20-30 min' }
];

export default useFetchRestaurants;