import { combineReducers } from 'redux';
import { SAVE_BUDGET, ADD_EXPENSE, REMOVE_EXPENSE } from '../constants';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case SAVE_BUDGET:
      return action.payload;
    default:
      return state;
  }
};

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload];
    case REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});

export default rootReducer;
