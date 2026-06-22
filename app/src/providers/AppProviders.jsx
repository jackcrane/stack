import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import { trpcReact } from '@template/rpc';

import { rpcClient } from '../lib/rpc';

export const AppProviders = ({ router }) => (
  <trpcReact.Provider
    client={trpcReact.createClient(rpcClient.clientConfig)}
    queryClient={rpcClient.queryClient}
  >
    <QueryClientProvider client={rpcClient.queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </trpcReact.Provider>
);
