export const calculateTax = (amount, rate) => {
    return amount * (rate / 100);
};

export const validateTransactionType = (type) => {
    return ['income', 'expense'].includes(type);
};
