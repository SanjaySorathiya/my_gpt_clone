"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import * as React from "react";

<<<<<<< HEAD
/**
 * Provides a TanStack Query client to the React tree (30s default stale time).
 */
=======
>>>>>>> c48641e9d6c8187ac2b054bf4000104ec73355b8
export function QueryProvider({ children }: { children: React.ReactNode }) {
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 30 * 1000, // 30 seconds
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}
<<<<<<< HEAD

=======
>>>>>>> c48641e9d6c8187ac2b054bf4000104ec73355b8
        </QueryClientProvider>
    );
}