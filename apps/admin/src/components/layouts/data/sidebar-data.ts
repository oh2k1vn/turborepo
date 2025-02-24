import { ShoppingCart, Package, User, CreditCard, Settings, HelpCircle, Command, GalleryVerticalEnd, AudioWaveform } from "lucide-react";
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: "Cyber Store",
    email: "support@cyberstore.com",
    avatar: "/avatars/cyberstore.jpg",
  },
  teams: [
    {
      name: "Cyber Store Admin",
      logo: Command,
      plan: "Pro Plan",
    },
    {
      name: "Cyber Store Vendor",
      logo: GalleryVerticalEnd,
      plan: "Business",
    },
    {
      name: "Cyber Store Customer",
      logo: AudioWaveform,
      plan: "Basic",
    },
  ],
  navGroups: [
    {
      title: "Tổng quan",
      items: [
        {
          title: "Tổng quan",
          url: "/",
          icon: ShoppingCart,
        },
        {
          title: "Sản phẩm",
          url: "/products",
          icon: Package,
        },
        {
          title: "Đơn hàng",
          url: "/orders",
          icon: CreditCard,
        },
        {
          title: "Khách hàng",
          url: "/customers",
          icon: User,
        },
      ],
    },
    {
      title: "Quản lý",
      items: [
        {
          title: "Kho hàng",
          url: "/inventory",
          icon: Package,
        },
        {
          title: "Khuyến mãi",
          url: "/discounts",
          icon: ShoppingCart,
        },
        {
          title: "Phân tích",
          url: "/analytics",
          icon: Command,
        },
      ],
    },
    {
      title: "Cài đặt & Hỗ trợ",
      items: [
        {
          title: "Cài đặt",
          icon: Settings,
          items: [
            {
              title: "Tài khoản",
              url: "/settings/account",
            },
            {
              title: "Giao diện",
              url: "/settings/display",
            },
            {
              title: "Thông báo",
              url: "/settings/notifications",
            },
          ],
        },
        {
          title: "Trung tâm trợ giúp",
          url: "/help-center",
          icon: HelpCircle,
        },
      ],
    },
  ],
};