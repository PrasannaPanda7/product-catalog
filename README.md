# Product Catalog with Cart (Next.js + TypeScript + Tailwind CSS + React Query)

## Overview

This is a simple product catalog frontend app built with Next.js (App Router), TypeScript, Tailwind CSS, and React Query.  
It fetches product data from the [DummyJSON Products API](https://dummyjson.com/products), allowing users to browse products, view details, and manage a persistent cart.

---

## Features

- Browse a product list with title, thumbnail, and price
- View detailed product pages with descriptions
- Add products to a cart
- Cart state persists across navigation and page reloads
- Cart icon shows number of items, with popup displaying cart contents
- Edit or remove items in the cart
- Efficient data fetching with React Query caching

---

## Tech Stack

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- React Query
- React Context API for global cart state

---

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm (comes with Node) or yarn

### Installation and Setup

Open your terminal and run the following commands step-by-step:

```bash
# Clone the repository
git clone https://github.com/your-username/product-catalog-app.git
cd product-catalog-app

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```
