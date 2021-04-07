import 'reflect-metadata';

import serverless from 'serverless-http';
import { createKoaServer } from 'routing-controllers';
import { UserController } from './UserController';

const app = createKoaServer({
  controllers: [UserController],
});

export const handler = serverless(app);
