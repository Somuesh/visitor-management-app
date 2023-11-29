# Visitor Management App

## Overview

The Visitor Management App is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application is designed to efficiently handle visitor details, providing a seamless process for capturing information and managing appointments.

## Features

- Capture visitor details: name, mobile number, and address.
- Select the person to meet from a dropdown list.
- Specify the reason for the visit.
- Offer the option to request drinks or snacks.
- Easy submission process to record visitor information.

## Technologies Used

- **MongoDB:** A NoSQL database used for storing visitor data.
- **Express.js:** A web application framework for Node.js used to create the backend API.
- **React.js:** A JavaScript library for building user interfaces, used for the frontend.
- **Node.js:** A JavaScript runtime used for the server-side development.

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/somuesh/visitor-management-app.git
   cd visitor-management-app
```

Install dependencies:

```bash
cd client && npm install
cd ../server && npm install
```

Configure Environment Variables:

Create a .env file in the server directory.

Define MongoDB connection string and other necessary variables.

Example .env:
```bash
  MONGODB_URI=mongodb://localhost:27017/visitor-management
```

Run the Application:

```bash
  # Start the server
  cd server && npm start

  # Start the client (in a separate terminal)
  cd client && npm start
```

The application will be accessible at http://localhost:3000.

Usage
1. Open the application in your web browser.
2. Fill in the visitor details: name, mobile number, and address.
3. Select the person to meet from the dropdown list.
4. Specify the reason for the visit.
5. Optionally, choose whether the visitor wants any drinks or snacks.
6. Click the "Submit" button to save the visitor information.

## Contributing
Contributions are welcome! If you'd like to contribute to the development of this Visitor Management App, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

Happy coding!
