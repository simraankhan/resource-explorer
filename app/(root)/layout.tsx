"use client";

import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({});

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-container">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </main>
  );
};

export default HomeLayout;
