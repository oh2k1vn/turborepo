import { useMutation } from "@tanstack/react-query";
import { apiClient } from "./apiClient";

interface LoginPayload {
  userName: string;
}

const login = async (payload: LoginPayload): Promise<string> => {
  const response = await apiClient.post("/Auth/CreateAdminToken", payload);
  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};