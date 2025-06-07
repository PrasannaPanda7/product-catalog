"use client";

import { useParams } from "next/navigation";
import { useCart, Product } from "../../../contexts/CartContext";
import { useQuery } from "@tanstack/react-query";
import { ParamValue } from "next/dist/server/request/params";

async function fetchProduct(id: ParamValue): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
}

export default function ProductDetail() {
  const { productId } = useParams();
  const { addToCart } = useCart();

  const { data, error, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId!),
    enabled: !!productId,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4 max-w-xl flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl">{data?.title}</h1>
      <img
        src={data?.thumbnail}
        alt={data?.title}
        className="w-64 object-cover"
      />
      <p>{data?.description}</p>
      <p>${data?.price}</p>
      <button
        onClick={data ? () => addToCart(data) : undefined}
        className="mt-2 bg-blue-500 text-white px-6 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
