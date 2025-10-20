# Nest CRUD Task by DevZone

A simple backend CRUD application built with NestJS that manages **Products**, **Customers**, and **Brands**. This project demonstrates RESTful API development using TypeScript, DTOs, validation, and modular architecture.

---

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Routes & Examples](#api-routes--examples)
- [Folder Structure](#folder-structure)
- [DTO Validation Rules](#dto-validation-rules)
- [Testing](#testing)
- [Swagger / OpenAPI Integration (Optional)](#swagger--openapi-integration-optional)
- [License](#license)

---

## Description

This backend-only project is built using NestJS and provides CRUD operations for three entities:

1. **Products** - Add, view, update, delete products.  
2. **Customers** - Add, view, update, delete customer information.  
3. **Brands** - Add, view, update, delete brand details.  

It uses DTOs for data validation and supports structured, modular development for scalability.

---

## Tech Stack

- **Node.js**  
- **NestJS**  
- **TypeScript**  
- **class-validator & class-transformer**  
- **RxJS**  
- **ESLint & Prettier**  
- **Jest & Supertest** (for testing)  

---

## Features

- CRUD APIs for **Products**, **Customers**, and **Brands**  
- Input validation using DTOs  
- Modular architecture (`ProductModule`, `CustomerModule`, `BrandModule`)  
- Environment-based configuration (`.env`)  
- Type-safe TypeScript implementation  
- Development, debugging, and production modes  
- Unit and e2e test setup  

---

## Getting Started

### Prerequisites

- Node.js (v18+)  
- npm or yarn  

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd nest-day04-crud-task

# Install dependencies
npm install
# or
yarn install
```
### Running the Application

```bash 
# Development mode with hot-reload
npm run start:dev

# Production mode
npm run build
npm run start:prod

# Standard start
npm run start

```

Server runs at http://localhost:6060 (from .env).

### ENV

```env 
PORT=6060
```
### API Routes & Examples

#### Product Routes

```bash 
GET /product - Get all products

GET /product/:id - Get a single product by ID

POST /product - Create a new product

PATCH /product/:id - Update a product

DELETE /product/:id - Delete a product 
```

#### Customer Routes
```bash 
GET /customer - Get all customers

GET /customer/:id - Get a single customer by ID

POST /customer - Create a new customer

PATCH /customer/:id - Update a customer

DELETE /customer/:id - Delete a customer 

```

#### Brand Routes
```bash 
GET /brand - Get all brands

GET /brand/:id - Get a single brand by ID

POST /brand - Create a new brand

PATCH /brand/:id - Update a brand

DELETE /brand/:id - Delete a brand
```

### Folder Structure

```lua
src/
├── app.module.ts
├── app.controller.ts
├── app.service.ts
├── main.ts
├── product/
│   ├── dto/
│   │   ├── create-product-dto.ts
│   │   └── update-product-dto.ts
│   ├── product.controller.ts
│   ├── product.module.ts
│   └── product.service.ts
├── customer/
│   ├── dto/
│   │   ├── create-customer-dto.ts
│   │   └── update-customer-dto.ts
│   ├── customer.controller.ts
│   ├── customer.module.ts
│   └── customer.service.ts
├── brand/
│   ├── dto/
│   │   ├── create-brand-dto.ts
│   │   └── update-brand-dto.ts
│   ├── brand.controller.ts
│   ├── brand.module.ts
│   └── brand.service.ts

```

### Testing

```bash
# Run unit tests
npm run test

# Watch mode
npm run test:watch

# Run e2e tests
npm run test:e2e

# Test coverage
npm run test:cov

```


---

## Conclusion

This NestJS CRUD backend is fully modular, type-safe, and ready for extension.  
With clearly defined DTOs, validation, and structured modules for **Products**, **Customers**, and **Brands**, it provides a solid foundation for any scalable API project.  

Feel free to fork, extend, or integrate it with your frontend projects. Happy coding!❤️❤️❤️
