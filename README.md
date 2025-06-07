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
git clone git@github.com:PrasannaPanda7/product-catalog.git
cd product-catalog

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

## Project structure

/app # Next.js App Router pages and layouts
/components # Reusable UI components (Navbar, CartPopup, etc.)
/contexts # React Context for Cart state management
/styles # Global CSS and Tailwind setup
/public # Static assets like images or icons

## Approach and Design Choices

The application uses Next.js App Router for a modern, file-based routing structure optimized for React Server Components.

React Query handles data fetching and caching with an infinite `staleTime` to avoid redundant network requests and improve performance. This also simplifies cache management without manual invalidations.

Global cart state is managed via React Context, providing a simple and effective way to share cart data and actions across components. Cart data is persisted in `localStorage` to maintain state across page reloads.

Tailwind CSS is chosen for rapid UI styling with utility-first classes, keeping CSS minimal and maintainable without separate stylesheets.

The cart popup design allows quick viewing and editing of cart items without navigating away from the page, enhancing user experience.

Error handling and loading states are implemented to improve robustness and provide user feedback during data fetches.
