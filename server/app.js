import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import taxRoutes from './routes/tax.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tax', taxRoutes);

export default app;
