#Product Listing Ecommerce REST API

Product Listing Ecommerce REST API implented with NodeJS, Express and MongoDb.

# How to Run the REST API

### Install

```
npm install
```

### To Start the API

```
npm start

```

#### Register new user

```
POST     /api/v1/users/register
```

#### Login user

Login & Auth token :

```
POST     /api/v1/users/login
```

### Users

```
GET      /api/v1/users
GET      /api/v1/users/:id
POST     /api/v1/users
PUT      /api/v1/users/:id
DELETE   /api/v1/users/:id
```

# Routes

### Products

```
GET      /api/v1/products
GET      /api/v1/products/:id
POST     /api/v1/products
PUT      /api/v1/products/:id
DELETE   /api/v1/products/:id
```

### Categories

```
GET      /api/v1/roles
GET      /api/v1/roles/:id
POST     /api/v1/roles
PUT      /api/v1/roles/:id
DELETE   /api/v1/roles/:id
```
