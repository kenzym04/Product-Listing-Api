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

_NB: I didn't filter out the .env file for evaluation purposes, otherwise it shouldn't be there (Db used is a temporary one time database)_

# How to Run the REST API

## Install

Install NodeJS then cd to project directory

```
npm install
```

To Start the API

```
npm start
```

## Register new user

```
POST     /api/v1/auth/register         Registers new user
```

## Log in User

```
POST     /api/v1/auth/login            Logs in user
```

# Users

```
GET      /api/v1/users/show		              Retrieves users
GET      /api/v1/users/show/:id	            Retrieves user's data by id
POST     /api/v1/users/new		              Creates a new user
PUT      /api/v1/users/update/:id	          Updates user details and password
DELETE   /api/v1/users/delete/:id	          Deletes user
```

# Products

```
GET      /api/v1/products/show	              Retrieves products
GET      /api/v1/products/show/:id	          Retrieves product's data by id
POST     /api/v1/products/new	                Creates new product
PUT      /api/v1/products/update/:id	        Updates product by id
DELETE   /api/v1/products/delete/:id	        Deletes product by id
```

# Roles

```
GET      /api/v1/roles/show		          Retrieves roles
GET      /api/v1/roles/show/:id	        Retrieves role by id
POST     /api/v1/roles/new		          creates a new role
PUT      /api/v1/roles/update/:id	      update role by id
DELETE   /api/v1/roles/delete/:id	      Delete role by id
```

## Database – MongoDB (Free version)

## Tests performed on Postman - functional, unit test and integration tests performed

## Project Structure - Model View Controller (MVC)
