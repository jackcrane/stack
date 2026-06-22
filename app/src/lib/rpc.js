import { createRpcClient } from '@template/rpc';

import { webConfig } from './config';

export const rpcClient = createRpcClient(webConfig.API_ORIGIN);
