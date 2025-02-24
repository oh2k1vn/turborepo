import axios from "axios";
import Cookies from "js-cookie";

const ACCESS_TOKEN = "access_token";

export const apiClient = axios.create({
  baseURL: "http://14.225.204.163/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 🛠️ Interceptor để tự động thêm token vào header
apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🛠️ Interceptor xử lý lỗi 401 (nếu token hết hạn)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Token có thể đã hết hạn.");
      // ❗ Xử lý đăng xuất hoặc làm mới token nếu có refresh token
      // Ví dụ: gọi API refresh token hoặc xóa token
    }
    return Promise.reject(error);
  }
);
