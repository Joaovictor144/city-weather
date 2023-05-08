import cors from 'cors';
import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  
}));

app.use(router);


export { app };
