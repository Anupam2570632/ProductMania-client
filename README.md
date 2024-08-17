# ProductMania

ProductMania is a full-stack e-commerce website that allows users to explore and purchase a wide range of products. The platform features a user-friendly interface, advanced search and filtering functionalities, and responsive design.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Installation](#installation)


## Features

- **Product Search**: Search and filter products by name.
- **Pagination**: Efficiently browse through a large number of products with pagination.
- **Category Browsing**: View and navigate products by category.
- **Responsive Design**: Mobile-friendly design ensures a seamless user experience on all devices.
- **Featured Products**: Highlighted section for top-rated and popular products.

- **Call to Action**: Encourage users to sign up for newsletters and exclusive offers.

## Technologies Used

- **Frontend**:
  - React.js
  - Tailwind CSS
  - Material Tailwind React
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (as a database)
- **Other Tools**:
  - React-hook-form

## Project Setup

### Prerequisites

Before you begin, ensure you have the following tools installed:

- **Node.js**: Download and install from [Node.js](https://nodejs.org/)
- **npm**: Comes bundled with Node.js, but you can check if it's installed with `npm -v`
- **MongoDB**: Install from [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/productmania.git
    cd productmania
    ```

2. **Install dependencies** for both frontend and backend:

   - Navigate to the `client` directory (Frontend):
     ```bash
     cd client
     npm install
     ```

   - Navigate to the `server` directory (Backend):
     ```bash
     cd ../server
     npm install
     ```

3. **Set up environment variables**:

   - In the `server` directory, create a `.env` file and add the following environment variables:
     ```
     PORT=5000
     MONGO_URI=your_mongo_db_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

4. **Run the development server**:

   - In the `server` directory, start the backend server:
     ```bash
     npm run dev
     ```

   - In the `client` directory, start the frontend server:
     ```bash
     npm start
     ```

   The frontend should now be running on `http://localhost:3000/` and the backend on `http://localhost:5000/`.

