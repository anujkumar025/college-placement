### Deployment ([Link](https://college-placement-6dlw.onrender.com/))
### Swagger UI ([Link](https://college-placement-6dlw.onrender.com/api))

# College Data Management Backend

This project is a backend application built using **NestJS** and **PostgreSQL** to manage and query college-related data. It demonstrates the ability to design relationships, handle complex queries, and deploy a project in a production-like environment. The application provides several core features, including authentication, CRUD operations, and secure endpoints.

## Features

1. **JWT-based Authentication**:
   - Users can sign up and log in using JWT (JSON Web Tokens) for secure authentication.
   - Endpoints are protected to ensure that only authenticated users can access them.

2. **CRUD Operations**:
   - A specific entity (e.g., User Profile, Product, or Task) is managed through Create, Read, Update, and Delete (CRUD) operations.
   - Validation is implemented for incoming requests to ensure data integrity.
   - Edge cases are handled appropriately to ensure robustness.

3. **Database Integration**:
   - The application uses **PostgreSQL** as the database, with **TypeORM** as the ORM to facilitate seamless interaction between the database and the NestJS application.
   - Complex queries and relationships are designed and implemented in the database to manage college-related data efficiently.

4. **Hosting**:
   - The project is deployed on a cloud platform (e.g., **Heroku**, **AWS**, **Vercel**, or **Render**).
   - API documentation is provided via Swagger or a **Postman Collection** to make it easier for developers to interact with the endpoints.

5. **Code Quality**:
   - Clean, modular, and reusable code is written following best practices and conventions.
   - The application structure is organized, with decorators used properly in controllers, services, and modules.

6. **Optional Enhancements**:
   - Pagination or search features have been added to one of the endpoints for improved data retrieval.
   - Role-based access control (RBAC) is implemented to restrict certain operations to users with specific roles.

## Getting Started

Instructions on set up, and run the project locally, including prerequisites, setup steps, and any required configuration.

## Add DATABASE_URL and SECRET_KEY in .env

```bash
$ npm install
```

## Set up prisma 

```bash
$ npx prisma migrate dev --name init
$ npx prisma generate
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
