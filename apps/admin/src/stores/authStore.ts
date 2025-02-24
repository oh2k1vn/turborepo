import Cookies from "js-cookie";
import { create } from "zustand";

const ACCESS_TOKEN = "access_token";

interface AuthUser {
  accountNo: string;
  email: string;
  role: string[];
  exp: number;
}

interface AuthState {
  user: AuthUser | null;
  accessToken: string;
  setUser: (user: AuthUser | null) => void;
  setAccessToken: (accessToken: string) => void;
  resetAccessToken: () => void;
  reset: () => void;
}

// 🛠️ Lấy token từ cookie
const getTokenFromCookie = (): string => {
  return Cookies.get(ACCESS_TOKEN) || "";
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: getTokenFromCookie(),

  setUser: (user) => set({ user }),

  setAccessToken: (accessToken) => {
    Cookies.set(ACCESS_TOKEN, accessToken);
    set({ accessToken });
  },

  resetAccessToken: () => {
    Cookies.remove(ACCESS_TOKEN);
    set({ accessToken: "" });
  },

  reset: () => {
    Cookies.remove(ACCESS_TOKEN);
    set({ user: null, accessToken: "" });
  },
}));
