
# QuickBite

QuickBite is a responsive, modern food ordering web application built with React and Tailwind CSS. It offers users an easy and delightful way to discover local restaurants, browse menus, and order dishes directly to their cart.

## Features

- *Home Page*: Browse a curated list of local restaurants.
- *Menu Viewing*: Click on a restaurant to view and select dishes from its menu.
- *Cart System*: Add dishes to your cart and update in real-time.
- *Checkout Page*: A simple flow to simulate order completion.
- *Contact Page*: Get in touch with the team using a built-in form.
- *About Page*: Learn more about the purpose and mission of QuickBite.
- *Footer*: Contains location and branding information (styled for Kenya).

## Tech Stack

- *React* with *React Router*
- *Tailwind CSS* for UI styling
- *Framer Motion* for animations
- *Heroicons* and *React Icons*
- *Local JSON server* for simulating API requests (/restaurants, /cart)

## Folder Structure


src/
├── App.jsx               # Layout with Navbar, Outlet, Footer
├── index.js              # Router setup
├── pages/
│   ├── Home.jsx          # Restaurant listing and menu view
│   ├── Cart.jsx          # Cart page (WIP or coming soon)
│   ├── Checkout.jsx      # Checkout flow (WIP or coming soon)
│   ├── Contact.jsx       # Contact form and info
│   ├── About.jsx         # About page
│   ├── Footer.jsx        # Styled footer component
│   └── Navbar.jsx        # Navigation bar with dynamic cart count
├── index.css             # Tailwind setup


## Getting Started

To run this project locally:

1. Clone the repository:

   bash
   git clone https://github.com/OderoKen254/QuickBite_Food_App.git
   cd QuickBite_Food_App
   

2. Install dependencies:

   bash
   npm install
   

3. Start the local JSON server (ensure you have a db.json file with restaurants and cart):

   bash
   npx json-server --watch db.json --port 3000
   

4. Run the React development server:

   bash
   npm run dev
   

The app should now be running at http://localhost:5173 and connected to the JSON server at http://localhost:3000.

## API Endpoints (JSON Server)

- GET /restaurants – fetches all restaurants with menus.
- GET /cart – fetches items in the cart.
- POST /cart – adds a new dish to the cart.

## Contributing

This project was built by *Group 3* in the *Moringa School* program.

### Team Members

- *Kennedy Odero* – Group Leader
- *Aquila Jedidiah*
- *Priscillah Njai*
- *Marvin Kadoyo*
- *Eugene Wekesa*
- *Meshack Gikonyo*

## License

This project is for educational and demonstration purposes. You can modify it freely for your own use.

## GitHub Repository

You can find the source code on GitHub here:

[QuickBite Food App Repository](https://github.com/OderoKen254/QuickBite_Food_App)
https://quick-bite-food-app-b2pt.vercel.app/