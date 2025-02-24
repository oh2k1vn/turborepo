import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await fetch("/api/products", {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return await response.json();
};

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 60 * 1000, // Giữ cache trong 60s
  });
}
