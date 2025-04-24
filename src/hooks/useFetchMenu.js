// import { useState, useEffect } from 'react';

// function useFetchMenu(restaurantId) {
//   const [menu, setMenu] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         // Mock data (replace with API call)
//         const mockData = [
//           { id: 1, name: 'Margherita Pizza', description: 'Classic tomato and mozzarella', price: 12.99, restaurantId: 1 },
//           { id: 2, name: 'Sushi Platter', description: 'Assorted sushi rolls', price: 18.99, restaurantId: 2 },
//           { id: 3, name: 'Cheeseburger', description: 'Beef patty with cheese', price: 9.99, restaurantId: 3 },
//         ].filter((item) => item.restaurantId === parseInt(restaurantId));
//         setTimeout(() => {
//           setMenu(mockData);
//           setLoading(false);
//         }, 1000); // Simulate network delay
//       } catch (err) {
//         setError('Failed to fetch menu');
//         setLoading(false);
//       }
//     };
//     fetchMenu();
//   }, [restaurantId]);

//   return { menu, loading, error };
// }

// export default useFetchMenu;


import { useState, useEffect } from 'react';

const useFetchMenu = (restaurantId) => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!restaurantId) {
      setLoading(false);
      return;
    }

    const fetchMenu = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await fetch(/api/restaurants/${restaurantId}/menu);
        
        if (!response.ok) {
          throw new Error(Failed to fetch menu: ${response.status});
        }
        
        const data = await response.json();
        setMenu(data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch menu');
        // Use mock data when API fails
        setMenu(mockMenus[restaurantId] || []);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  return { menu, loading, error };
};

// Mock data for development or when API is not available
const mockMenus = {
  1: [
    { id: 101, name: 'Classic Burger', price: 8.99, description: 'Beef patty with lettuce, tomato, and special sauce' },
    { id: 102, name: 'Cheese Fries', price: 4.99, description: 'Crispy fries with melted cheese' },
    { id: 103, name: 'Chocolate Shake', price: 3.99, description: 'Rich and creamy chocolate milkshake' }
  ],
  2: [
    { id: 201, name: 'Margherita Pizza', price: 12.99, description: 'Classic pizza with tomato sauce, mozzarella, and basil' },
    { id: 202, name: 'Pepperoni Pizza', price: 14.99, description: 'Pizza topped with pepperoni slices' },
    { id: 203, name: 'Garlic Bread', price: 5.99, description: 'Toasted bread with garlic butter' }
  ]
};

export default useFetchMenu;