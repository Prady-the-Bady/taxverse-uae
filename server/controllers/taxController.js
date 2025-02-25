import Transaction from '../models/Transaction.js';

export const getTaxData = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.user.id });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addTransaction = async (req, res) => {
    const { amount, description, type } = req.body;
    try {
        const newTransaction = new Transaction({
            userId: req.user.id,
            amount,
            description,
            type
        });
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
