import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BudgetFormContainer from '../containers/BudgetFormContainer';
import ExpenseFormContainer from '../containers/ExpensesFormContainer';
import ExpensesTableContainer from '../containers/ExpensesTableContainer';
import ValuesContainer from '../containers/ValuesContainer';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

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
