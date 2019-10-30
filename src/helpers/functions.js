export const calculateTotalExpenses = expenses => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

export const calculateBalance = (budget, expenses) => budget - expenses;
