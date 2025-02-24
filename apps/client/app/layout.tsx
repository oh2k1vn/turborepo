import "@repo/ui/globals.css";
import React from "react";
import { Toaster } from "sonner";
import Header from "../components/layouts/header";
import QueryProvider from "./providers/QueryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <QueryProvider>
          <Header />
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
