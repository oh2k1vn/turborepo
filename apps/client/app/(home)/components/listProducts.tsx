"use client";

import { useProducts } from "../../../hooks/useProducts";
import Product from "./product";

const ListProduct = () => {
  const { data, isLoading, error } = useProducts();
  if (error) return <></>;
  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.data?.map((product: any) => (
        <Product key={product?.id} {...product} />
      ))}
    </div>
  );
};

export default ListProduct;
