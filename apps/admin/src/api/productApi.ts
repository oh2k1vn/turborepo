import { useMutation, useQuery } from "@tanstack/react-query";
import { apiClient } from "./apiClient";
import { ResponseAPI } from "@/types/ResponseAPI";

export interface Product {
    id: string
    name: string
    imgUrl: string
    imgUrls: string
    price: number
    discountedPrice: number
    tags: string
    brand: string
    shortDescription: string
    description: string
    properties: string
  }

interface ProductQueryPayload {
    pageNumber: number;
    pageSize: number;
    criteria?: { field: string; value: string; type: string }[];
    sort?: { field: string; order: string };
    operator?: string;
}

interface ProductFieldPayload {
    field: string;
    value: string;
}

// 📌 Hàm gọi API chung
export const fetchProducts = async <T>(url: string, payload: object = {}): Promise<ResponseAPI<T>> => {
    const response = await apiClient.post(url, payload);
    return response.data;
};

// 📌 Hooks API
export const useGetAllProducts = () =>
    useQuery<ResponseAPI<Product[]>, Error>({
        queryKey: ['getAllProducts'],
        queryFn: () => fetchProducts<Product[]>("/admin/ProductAdmin/GetAllProduct"),
    });

export const useGetProductByQuery = () =>
    useMutation<ResponseAPI<Product[]>, Error, ProductQueryPayload>({
        mutationFn: async (payload) => fetchProducts<Product[]>("/admin/ProductAdmin/GetProductByQuery", payload),
    });

export const useGetProductByField = () =>
    useMutation<ResponseAPI<Product[]>, Error, ProductFieldPayload>({
        mutationFn: async (payload) => fetchProducts<Product[]>("/admin/ProductAdmin/GetProductByField", payload),
    });
