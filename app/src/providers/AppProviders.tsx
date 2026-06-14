import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, type Router } from 'react-router-dom';

import { trpcReact } from '@template/rpc';

import { rpcClient } from '../lib/rpc';

type AppProvidersProps = {
  router: Router;
};

export const AppProviders = ({ router }: AppProvidersProps) => (
  <trpcReact.Provider
    client={trpcReact.createClient(rpcClient.clientConfig)}
    queryClient={rpcClient.queryClient}
  >
    <QueryClientProvider client={rpcClient.queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </trpcReact.Provider>
);
