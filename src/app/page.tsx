"use client";

import Link from "next/link";
import { Product } from "../contexts/CartContext";
import { useQuery } from "@tanstack/react-query";

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-wrap gap-4 p-4 justify-between">
      {error && <p>{error}</p>}
      {data?.map((product) => (
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          className="border p-4 block w-60"
        >
          <h2>{product.title}</h2>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-32 object-cover"
          />
          <p>${product.price}</p>
        </Link>
      ))}
    </div>
  );
}
