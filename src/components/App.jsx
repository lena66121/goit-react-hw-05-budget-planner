import React from 'react';
import PropTypes from 'prop-types';
import BudgetFormContainer from '../containers/BudgetFormContainer';
import ExpenseFormContainer from '../containers/ExpensesFormContainer';
import ExpensesTableContainer from '../containers/ExpensesTableContainer';
import ValuesContainer from '../containers/ValuesContainer';
import { Container } from './styled-components/styles';

const App = ({ expenses }) => {
  return (
    <Container>
      <BudgetFormContainer />
      <ValuesContainer />
      <ExpenseFormContainer />
      {expenses.length > 0 && <ExpensesTableContainer />}
    </Container>
  );
};

App.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default App;
