import { QueryClient } from 'react-query';

export const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            refetchInterval: 0,
        },
    },
});