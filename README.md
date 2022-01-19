# Product Listing Ecommerce REST API

Product Listing Ecommerce REST API implemented with;
<<<<<<< HEAD
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
=======
>>>>>>> rest-api-draft-work

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
<<<<<<< HEAD
=======

Install NodeJS then cd to project directory
>>>>>>> rest-api-draft-work

Install NodeJS then cd to project directory and run npm install

To Start the API
```
Run ‘npm start’ to run the API
```

<<<<<<< HEAD
## Register new user
```
POST     /api/v1/users/register         Registers new user 
```

## Log in User - JWT
=======
To Start the API

```
npm start
```

## Register new user
>>>>>>> rest-api-draft-work

# Users
```
<<<<<<< HEAD
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
=======
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

>>>>>>> rest-api-draft-work
## Project Structure - Model View Controller (MVC)
