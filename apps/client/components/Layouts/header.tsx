"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, User, ShoppingCart, Menu } from "lucide-react";
import { Input } from "@repo/ui/components/input";
import { Sheet, SheetContent, SheetTrigger } from "@repo/ui/components/sheet";
import { Button } from "@repo/ui/components/button";
import { DialogDescription, DialogTitle } from "@repo/ui/components/dialog";
import { cn } from "@repo/ui/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/components/tooltip";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

const LIST_BTN = [
  { name: "Mục yêu thích", icon: Heart, path: "/" },
  { name: "Người dùng", icon: User, path: "/" },
  { name: "Giỏ hàng", icon: ShoppingCart, path: "/cart" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky z-50 top-0 left-0 right-0 backdrop-blur-xl bg-white/50 border-b border-[#B5B5B5]">
      <div className="flex justify-between items-center gap-4 py-2 container">
        <Link href="/" className="font-bold text-xl">
          Cyber Store
        </Link>

        <Input
          className="hidden lg:block bg-[#F5F5F5] max-w-96 ml-8"
          placeholder="Tìm kiếm sản phẩm ..."
        />

        <nav className="hidden lg:flex items-center gap-10 font-medium text-base px-20">
          {NAV_ITEMS.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className={cn(
                "opacity-30 transition-all duration-300 hover:opacity-100",
                pathname === path
                  ? "opacity-100 text-primary"
                  : "cursor-pointer"
              )}
            >
              {name}
            </Link>
          ))}
        </nav>

        <TooltipProvider>
          <div className="hidden lg:flex items-center gap-4">
            {LIST_BTN.map(({ icon: Icon, name, path }, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link href={path} className="p-3 rounded-full">
                    <Icon className="h-4 w-4" strokeWidth={1} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="text-xs">{name}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col h-full">
            <DialogTitle className="font-bold text-xl">Cyber Store</DialogTitle>
            <DialogDescription>
              <Input
                className="bg-[#F5F5F5] w-full"
                placeholder="Tìm kiếm sản phẩm ..."
              />
            </DialogDescription>
            <nav className="flex-1 flex flex-col gap-6 font-medium text-base">
              {NAV_ITEMS.map(({ name, path }) => (
                <Link
                  key={name}
                  href={path}
                  className={cn(
                    "opacity-30 transition-all duration-300",
                    pathname === path
                      ? "opacity-100 text-primary"
                      : "cursor-pointer"
                  )}
                >
                  {name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-around">
              {[Heart, User, ShoppingCart].map((Icon, index) => (
                <Icon key={index} strokeWidth={1} />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
