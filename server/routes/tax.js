import express from 'express';
import { getTaxData, addTransaction } from '../controllers/taxController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/data', auth, getTaxData);
router.post('/transaction', auth, addTransaction);

export default router;
