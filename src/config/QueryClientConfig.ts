import { QueryClient } from '@tanstack/react-query';

export const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            refetchInterval: 0,
        },
    },
});