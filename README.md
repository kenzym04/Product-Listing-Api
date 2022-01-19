# Product Listing Ecommerce REST API

Product Listing Ecommerce REST API implemented with;
```
•	NodeJS v14.7.3
•	  "dependencies": {
•	    "bcryptjs": "^2.4.3",
•	    "body-parser": "^1.19.1",
•	    "cors": "^2.8.5",
•	    "dotenv": "^14.1.0",
•	    "express": "^4.17.2",
•	    "express-jwt": "^6.1.0",
•	    "jsonwebtoken": "^8.5.1",
•	    "mongoose": "^6.1.6",
•	    "morgan": "^1.10.0",
•	    "nodemon": "^2.0.15"
```

*NB: I didn't filter out the .env file for evaluation purposes, otherwise it shouldn't be there (Db used is a temporary one time database)*

# How to Run the REST API

## Install

Install NodeJS then cd to project directory and run npm install

To Start the API
```
Run ‘npm start’ to run the API
```

## Register new user
```
POST     /api/v1/users/register         Registers new user 
```

## Log in User - JWT

# Users
```
POST     /api/v1/users/login	          Logs in user - JWT
GET      /api/v1/users		              retrieves users data
GET      /api/v1/users/:id	            retrieves user data by id
POST     /api/v1/users		              creates a new user
PUT      /api/v1/users/:id	            updates user details and password
DELETE   /api/v1/users/:id	            Deletes user
```

# Routes

## Products
```
GET      /api/v1/products	              retrieves product
GET      /api/v1/products/:id	          retrieves product data by id
POST     /api/v1/products	              retrieves products data
PUT      /api/v1/products/:id	          updates product by id
DELETE   /api/v1/products/:id	          deletes product by id
```

## Roles
```
GET      /api/v1/roles		              retrieves roles data
GET      /api/v1/roles/:id	            retrieves roles by id
POST     /api/v1/roles		              creates a new role
PUT      /api/v1/roles/:id	            update roles by id
DELETE   /api/v1/roles/:id	            delete roles by id
```

## Database – MongoDB
## Tests performed on Postman - functional, unit test and integration test performed
## Project Structure - Model View Controller (MVC)
