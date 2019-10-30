import shortid from 'shortid';
import { REMOVE_EXPENSE, SAVE_BUDGET, ADD_EXPENSE } from '../constants';

export const saveBudget = value => ({
  type: SAVE_BUDGET,
  payload: value,
});

export const addExpenses = ({ name, amount }) => ({
  type: ADD_EXPENSE,
  payload: {
    id: shortid.generate(),
    name,
    amount: Number(amount),
  },
});

export const removeExpense = id => ({
  type: REMOVE_EXPENSE,
  payload: id,
});
